(function () {
  const state = window.__PORTFOLIO__;

  if (!state?.site || !state?.shared) {
    console.warn("Portfolio payload missing.");
    return;
  }

  const root = document.documentElement;
  const body = document.body;
  const { site, shared } = state;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeButtons = [...document.querySelectorAll("[data-set-theme]")];
  const nav = document.querySelector(".site-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const modalLayer = document.querySelector(".modal-layer");
  const modalContent = modalLayer?.querySelector(".modal-content") ?? null;
  const lightboxLayer = document.querySelector(".lightbox-layer");
  const lightboxPanel = lightboxLayer?.querySelector(".lightbox") ?? null;
  const lightboxImage = lightboxLayer?.querySelector("img") ?? null;
  const lightboxCaption = lightboxLayer?.querySelector("figcaption") ?? null;
  const lightboxZoomButton = lightboxLayer?.querySelector("[data-toggle-lightbox-zoom]") ?? null;
  const copyButton = document.querySelector("[data-copy-email]");
  const copyStatus = document.querySelector(".copy-status");
  const careerCards = [...document.querySelectorAll("[data-career-track]")];
  const revealElements = [...document.querySelectorAll(".reveal")];
  const projectMap = new Map((site.modalProjects ?? []).map((project) => [project.id, project]));
  const storageKey = "portfolio-theme";
  const escapeAttr = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  let activeProject = null;
  let activeScreenshotIndex = 0;
  let activeLightboxItems = [];
  let lastTrigger = null;
  let lastLightboxTrigger = null;
  let lightboxOpenedOverModal = false;
  let lightboxDragState = null;
  let lightboxPan = { x: 0, y: 0 };
  let suppressLightboxZoomClick = false;
  let releaseModalFocus = function () {};
  let releaseLightboxFocus = function () {};

  const setViewportWidthVar = () => {
    root.style.setProperty("--viewport-safe-width", `${root.clientWidth}px`);
  };

  setViewportWidthVar();
  window.addEventListener("resize", setViewportWidthVar, { passive: true });

  const readSavedTheme = () => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
    } catch (error) {
      console.warn("Theme storage unavailable.", error);
    }
    return root.dataset.theme === "dark" ? "dark" : "light";
  };

  const applyTheme = (theme, persist = true) => {
    const safeTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", safeTheme);
    themeButtons.forEach((button) => {
      const isActive = button.dataset.setTheme === safeTheme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (!persist) return;

    try {
      window.localStorage.setItem(storageKey, safeTheme);
    } catch (error) {
      console.warn("Theme could not be persisted.", error);
    }
  };

  applyTheme(readSavedTheme(), false);

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.setTheme));
  });

  if (prefersReducedMotion) {
    body.classList.add("reduce-motion");
  }

  if (!prefersReducedMotion && revealElements.length && "IntersectionObserver" in window) {
    body.classList.add("motion-ready");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const mobileNavBreakpoint = 720;
  const setNavOpen = (open) => {
    if (!nav) return;

    nav.classList.toggle("is-open", open);
    menuToggle?.setAttribute("aria-expanded", String(open));
    body.classList.toggle("nav-open", open);
  };

  const closeNav = () => setNavOpen(false);

  menuToggle?.addEventListener("click", () => {
    if (!nav) return;
    setNavOpen(!nav.classList.contains("is-open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("is-open")) return;
    if (!(event.target instanceof Node)) return;
    if (nav.contains(event.target) || menuToggle?.contains(event.target)) return;
    closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > mobileNavBreakpoint) closeNav();
  });

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const scrollToHash = (hash, behavior = prefersReducedMotion ? "auto" : "smooth") => {
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    const navOffset = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 24;
    window.scrollTo({ top: Math.max(top, 0), behavior });
  };

  const updateActiveNav = () => {
    if (!navLinks.length) return;

    let currentSection = null;
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        currentSection = section;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", Boolean(currentSection) && href === `#${currentSection.id}`);
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.hasAttribute("data-role-nav")) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();
      window.history.pushState(null, "", href);
      scrollToHash(href);

      if (nav?.contains(link)) {
        closeNav();
      }
    });
  });

  window.addEventListener("hashchange", () => scrollToHash(window.location.hash, prefersReducedMotion ? "auto" : "smooth"));

  if (window.location.hash) {
    window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 60);
  }

  const setActiveCareer = (activeCard) => {
    const activeTrack = activeCard.dataset.careerTrack || "data-engineer";
    root.dataset.activeTrack = activeTrack;

    careerCards.forEach((card) => {
      const isActive = card === activeCard;
      const status = card.querySelector(".panel-status");
      const activationButton = card.querySelector("[data-panel-activate]");
      const panelActions = card.querySelectorAll(".career-actions a, .career-actions button");
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-current", String(isActive));
      activationButton?.setAttribute("aria-pressed", String(isActive));
      if (status) {
        status.textContent = isActive ? card.dataset.activeStatus || "" : card.dataset.idleStatus || "";
      }
      panelActions.forEach((link) => {
        link.tabIndex = isActive ? 0 : -1;
        link.setAttribute("aria-hidden", String(!isActive));
      });
    });
  };

  const navigateToRole = (href, sourceCard = null) => {
    if (!href || href === "#") return;

    const isHashNavigation = href.startsWith("#");
    const target = isHashNavigation ? document.querySelector(href) : null;
    if (isHashNavigation && !(target instanceof HTMLElement)) return;

    if (sourceCard) {
      setActiveCareer(sourceCard);
      root.classList.add("is-role-transitioning");
    }

    window.setTimeout(
      () => {
        if (isHashNavigation) {
          window.history.pushState(null, "", href);
          scrollToHash(href, prefersReducedMotion ? "auto" : "smooth");
        } else {
          window.location.href = href;
        }
        root.classList.remove("is-role-transitioning");
        closeNav();
      },
      sourceCard && !prefersReducedMotion ? 260 : 0
    );
  };

  if (careerCards.length) {
    const initialCareer = careerCards.find((card) => card.classList.contains("is-active")) || careerCards[0];
    setActiveCareer(initialCareer);
  }

  careerCards.forEach((card) => {
    const roleLinks = [...card.querySelectorAll("[data-role-nav]")];
    const activationButton = card.querySelector("[data-panel-activate]");

    card.addEventListener("mouseenter", () => setActiveCareer(card));
    card.addEventListener("focusin", () => setActiveCareer(card));
    activationButton?.addEventListener("click", () => setActiveCareer(card));
    card.addEventListener("keydown", (event) => {
      if (event.target instanceof Element && event.target.closest(".career-actions")) return;

      const currentIndex = careerCards.indexOf(card);
      const nextKeys = ["ArrowRight", "ArrowDown"];
      const previousKeys = ["ArrowLeft", "ArrowUp"];

      if (![...nextKeys, ...previousKeys].includes(event.key)) return;

      event.preventDefault();
      const direction = nextKeys.includes(event.key) ? 1 : -1;
      const nextIndex = (currentIndex + direction + careerCards.length) % careerCards.length;
      const nextCard = careerCards[nextIndex];
      const nextTarget = nextCard.querySelector("[data-panel-activate]") || nextCard.querySelector("[data-role-nav]");
      if (nextTarget instanceof HTMLElement) {
        nextTarget.focus({ preventScroll: true });
      }
      setActiveCareer(nextCard);
    });

    roleLinks.forEach((roleLink) => {
      roleLink.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        const href = roleLink.getAttribute("href");
        event.preventDefault();
        navigateToRole(href, card);
      });
    });
  });

  document.querySelectorAll("[data-role-nav]").forEach((link) => {
    if (link.closest("[data-career-track]")) return;

    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const href = link.getAttribute("href");
      event.preventDefault();
      navigateToRole(href);
    });
  });

  document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
    const label = toggle.querySelector("span");
    const icon = toggle.lastElementChild;
    const panel = toggle.nextElementSibling;

    if (!(panel instanceof HTMLElement)) return;

    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    if (label) label.textContent = site.ui.openDetails;
    if (icon) icon.textContent = "+";

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      if (label) label.textContent = expanded ? site.ui.openDetails : site.ui.closeDetails;
      if (icon) icon.textContent = expanded ? "+" : "-";
      panel.hidden = expanded;
    });
  });

  copyButton?.addEventListener("click", async () => {
    const statusDuration = 2200;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable.");
      await navigator.clipboard.writeText(site.contact.email);
      copyStatus?.classList.add("is-visible");
      window.setTimeout(() => copyStatus?.classList.remove("is-visible"), statusDuration);
    } catch (error) {
      console.warn("Copy failed.", error);
      copyStatus?.classList.add("is-visible");
    }
  });

  const focusable = (container) =>
    [...container.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')].filter(
      (element) => !element.hasAttribute("disabled")
    );

  const trapFocus = (layer) => {
    const items = focusable(layer);
    if (!items.length) return function () {};

    const first = items[0];
    const last = items[items.length - 1];

    first.focus();

    const handleKeydown = (event) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    layer.addEventListener("keydown", handleKeydown);
    return () => layer.removeEventListener("keydown", handleKeydown);
  };

  const renderModalProject = (project) => {
    if (!modalContent) return;

    const titleFromPath = (src) => {
      const fileName = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
      return fileName
        .replace(/^\d+_?/, "")
        .replace(/[_-]+/g, " ")
        .trim();
    };

    const mediaPair = Array.isArray(project.imagePair) && project.imagePair.length
      ? `
      <div class="modal-showcase" aria-label="${project.title} visuals">
        ${project.imagePair
          .map((src, index) => {
            const containClass =
              (index === 0 && project.containFirstImage) || (index === 1 && project.containSecondImage)
                ? "contain"
                : "";
            const label = project.imagePairLabels?.[index] || (index === 0 ? "Core system view" : "Supporting interface");

            return `
              <figure class="modal-showcase-frame ${index === 0 ? "is-primary" : "is-secondary"}">
                <button class="media-zoom-button" type="button" data-open-image="${escapeAttr(src)}" data-open-image-alt="${escapeAttr(`${project.title} ${label}`)}" data-open-image-caption="${escapeAttr(label)}" aria-label="Open larger image: ${escapeAttr(label)}">
                  <img class="${containClass}" src="${src}" alt="${project.title} ${label}" />
                  <span class="sr-only">Open larger image</span>
                </button>
                <figcaption>${label}</figcaption>
              </figure>`;
          })
          .join("")}
      </div>`
      : "";

    const screenshots = Array.isArray(project.screenshots) && project.screenshots.length
      ? `
      <div class="modal-gallery">
        <div class="modal-gallery-head">
          <div>
            <p class="eyebrow">${site.ui.viewScreenshots}</p>
            <h4>Interface evidence</h4>
          </div>
          <span>${project.screenshots.length} screens</span>
        </div>
        <div class="screenshot-grid">
          ${project.screenshots
            .map(
              (src, index) => `
            <button class="${index === 0 ? "is-featured" : ""}" type="button" data-open-screenshot="${index}">
              <img src="${src}" alt="${site.ui.screenshot} ${index + 1}" />
              <span>${titleFromPath(src) || `${site.ui.screenshot} ${index + 1}`}</span>
            </button>`
            )
            .join("")}
        </div>
      </div>`
      : "";

    const links = Array.isArray(project.links) && project.links.length
      ? `<div class="modal-links">${project.links
          .map((link) => {
            const external = /^https?:/i.test(link.url);
            const target = external ? ' target="_blank" rel="noreferrer"' : "";
            const download = link.download ? " download" : "";
            return `<a class="link-chip" href="${link.url}"${target}${download}>${link.label}</a>`;
          })
          .join("")}</div>`
      : "";

    modalContent.innerHTML = `
      <header class="modal-header">
        <div>
          <p class="modal-kicker">Project case</p>
          <h3 id="modal-title">${project.title}</h3>
          <p>${project.meta}</p>
        </div>
        <div class="modal-intro">
          <p class="modal-copy">${project.summary}</p>
          <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </header>
      ${mediaPair}
      ${screenshots}
      <section class="modal-proof">
        <p class="eyebrow">Owned work</p>
        <ul class="modal-bullets">${project.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </section>
      ${links}`;

    modalContent.querySelectorAll("[data-open-screenshot]").forEach((button) => {
      button.addEventListener("click", () => openLightbox(Number(button.dataset.openScreenshot), button));
    });

    bindImageZoomTriggers(modalContent);
  };

  const openModal = (projectId, trigger) => {
    if (!modalLayer || !modalContent) return;

    const project = projectMap.get(projectId);
    if (!project) return;

    activeProject = project;
    lastTrigger = trigger ?? null;
    renderModalProject(project);
    modalLayer.hidden = false;
    body.style.overflow = "hidden";
    releaseModalFocus = trapFocus(modalLayer);
  };

  const closeModal = () => {
    if (!modalLayer || !modalContent) return;

    modalLayer.hidden = true;
    body.style.overflow = "";
    releaseModalFocus();
    modalContent.innerHTML = "";
    activeProject = null;
    lastTrigger?.focus?.();
  };

  const getLightboxZoomScale = () => (window.matchMedia("(max-width: 720px)").matches ? 2.55 : 2.1);

  const getLightboxPanBounds = () => {
    if (!lightboxZoomButton || !lightboxImage) return { x: 0, y: 0 };

    const frame = lightboxZoomButton.getBoundingClientRect();
    const imageWidth = lightboxImage.offsetWidth || lightboxImage.getBoundingClientRect().width;
    const imageHeight = lightboxImage.offsetHeight || lightboxImage.getBoundingClientRect().height;
    const scale = Number(lightboxPanel?.style.getPropertyValue("--lightbox-zoom-scale")) || getLightboxZoomScale();

    return {
      x: Math.max(0, (imageWidth * scale - frame.width) / 2),
      y: Math.max(0, (imageHeight * scale - frame.height) / 2),
    };
  };

  const setLightboxPan = (x = 0, y = 0) => {
    if (!lightboxImage) return;

    const bounds = getLightboxPanBounds();
    lightboxPan = {
      x: Math.max(-bounds.x, Math.min(bounds.x, x)),
      y: Math.max(-bounds.y, Math.min(bounds.y, y)),
    };
    lightboxImage.style.setProperty("--lightbox-pan-x", `${lightboxPan.x}px`);
    lightboxImage.style.setProperty("--lightbox-pan-y", `${lightboxPan.y}px`);
    const scale = lightboxPanel?.classList.contains("is-zoomed")
      ? Number(lightboxPanel.style.getPropertyValue("--lightbox-zoom-scale")) || getLightboxZoomScale()
      : 1;
    lightboxImage.style.transform = `translate3d(${lightboxPan.x}px, ${lightboxPan.y}px, 0px) scale(${scale})`;
  };

  const releaseLightboxPointerCapture = (pointerId) => {
    if (typeof pointerId !== "number" || !lightboxZoomButton?.hasPointerCapture?.(pointerId)) return;

    try {
      lightboxZoomButton.releasePointerCapture(pointerId);
    } catch (error) {
      // Pointer capture may already be released by the browser.
    }
  };

  const setLightboxZoom = (isZoomed) => {
    if (!lightboxPanel || !lightboxZoomButton) return;

    lightboxPanel.classList.toggle("is-zoomed", isZoomed);
    lightboxPanel.classList.remove("is-dragging");
    lightboxPanel.style.setProperty("--lightbox-zoom-scale", String(getLightboxZoomScale()));
    lightboxZoomButton.setAttribute("aria-pressed", String(isZoomed));
    lightboxZoomButton.setAttribute(
      "aria-label",
      isZoomed ? site.ui.fitImage || "Fit image to screen" : site.ui.zoomImage || "Zoom image"
    );

    setLightboxPan(0, 0);
    if (!isZoomed) {
      releaseLightboxPointerCapture(lightboxDragState?.pointerId);
      lightboxDragState = null;
      suppressLightboxZoomClick = false;
    }
  };

  const canDragLightboxImage = () =>
    Boolean(lightboxPanel?.classList.contains("is-zoomed") && lightboxZoomButton);

  const stopLightboxDrag = (event) => {
    if (!lightboxDragState) return;

    const shouldKeepClickSuppressed = lightboxDragState.didMove && lightboxDragState.startedOnZoomButton;
    const pointerId = lightboxDragState.pointerId;
    lightboxPanel?.classList.remove("is-dragging");
    lightboxDragState = null;
    releaseLightboxPointerCapture(pointerId);
    if (!shouldKeepClickSuppressed) suppressLightboxZoomClick = false;
  };

  const moveLightboxDrag = (event) => {
    if (!lightboxDragState || lightboxDragState.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - lightboxDragState.startX;
    const deltaY = event.clientY - lightboxDragState.startY;
    if (!lightboxDragState.didMove && Math.hypot(deltaX, deltaY) < 4) return;

    event.preventDefault();
    lightboxDragState.didMove = true;
    suppressLightboxZoomClick = true;
    lightboxPanel?.classList.add("is-dragging");
    setLightboxPan(lightboxDragState.panX + deltaX, lightboxDragState.panY + deltaY);
  };

  const renderLightbox = () => {
    if (!lightboxImage || !lightboxCaption || !activeLightboxItems.length) return;

    const item = activeLightboxItems[activeScreenshotIndex];
    if (!item?.src) return;

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt || site.ui.screenshot;
    lightboxImage.draggable = false;
    lightboxCaption.textContent = item.caption || `${activeScreenshotIndex + 1} / ${activeLightboxItems.length}`;
    lightboxLayer?.querySelectorAll("[data-lightbox-step]").forEach((button) => {
      button.hidden = activeLightboxItems.length < 2;
    });
    setLightboxZoom(false);
  };

  const openLightboxItems = (items, index = 0, trigger = null) => {
    if (!lightboxLayer || !items.length) return;

    activeLightboxItems = items;
    activeScreenshotIndex = Math.max(0, Math.min(index ?? 0, items.length - 1));
    lastLightboxTrigger = trigger ?? null;
    lightboxOpenedOverModal = Boolean(modalLayer && !modalLayer.hidden);
    lightboxLayer.hidden = false;
    body.style.overflow = "hidden";
    renderLightbox();
    releaseLightboxFocus = trapFocus(lightboxLayer);
  };

  const openLightbox = (index, trigger = null) => {
    if (!activeProject?.screenshots?.length) return;

    const items = activeProject.screenshots.map((src, itemIndex) => ({
      src,
      alt: `${site.ui.screenshot} ${itemIndex + 1}`,
      caption: `${itemIndex + 1} / ${activeProject.screenshots.length}`,
    }));

    openLightboxItems(items, index, trigger);
  };

  const openStandaloneImage = (trigger) => {
    const src = trigger.dataset.openImage;
    if (!src) return;

    openLightboxItems(
      [
        {
          src,
          alt: trigger.dataset.openImageAlt || site.ui.screenshot,
          caption: trigger.dataset.openImageCaption || trigger.dataset.openImageAlt || site.ui.screenshot,
        },
      ],
      0,
      trigger
    );
  };

  const closeLightbox = () => {
    if (!lightboxLayer) return;
    lightboxLayer.hidden = true;
    releaseLightboxFocus();
    setLightboxZoom(false);
    activeLightboxItems = [];
    lightboxImage?.removeAttribute("src");
    if (!lightboxOpenedOverModal) body.style.overflow = "";
    lightboxOpenedOverModal = false;
    lastLightboxTrigger?.focus?.();
    lastLightboxTrigger = null;
  };

  const bindImageZoomTriggers = (scope = document) => {
    scope.querySelectorAll("[data-open-image]").forEach((button) => {
      if (button.dataset.zoomBound === "true") return;
      button.dataset.zoomBound = "true";
      button.addEventListener("click", () => openStandaloneImage(button));
    });
  };

  document.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openProject, button));
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.querySelectorAll("[data-close-lightbox]").forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  lightboxZoomButton?.addEventListener("pointerdown", (event) => {
    if (!canDragLightboxImage()) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.pointerType !== "mouse" && event.isPrimary === false) return;

    lightboxDragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: lightboxPan.x,
      panY: lightboxPan.y,
      didMove: false,
      startedOnZoomButton: true,
    };
    suppressLightboxZoomClick = false;
    try {
      lightboxZoomButton.setPointerCapture?.(event.pointerId);
    } catch (error) {
      // Pointer capture is progressive enhancement; window listeners still track the drag.
    }
  });

  lightboxZoomButton?.addEventListener("dragstart", (event) => event.preventDefault());
  lightboxZoomButton?.addEventListener("lostpointercapture", stopLightboxDrag);
  window.addEventListener("pointermove", moveLightboxDrag, { passive: false });
  window.addEventListener("pointerup", stopLightboxDrag);
  window.addEventListener("pointercancel", stopLightboxDrag);
  window.addEventListener("resize", () => {
    if (!lightboxPanel?.classList.contains("is-zoomed")) return;
    lightboxPanel.style.setProperty("--lightbox-zoom-scale", String(getLightboxZoomScale()));
    setLightboxPan(lightboxPan.x, lightboxPan.y);
  });

  lightboxZoomButton?.addEventListener("click", (event) => {
    if (suppressLightboxZoomClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressLightboxZoomClick = false;
      return;
    }

    setLightboxZoom(!lightboxPanel?.classList.contains("is-zoomed"));
  });

  document.querySelectorAll("[data-lightbox-step]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeLightboxItems.length) return;
      const step = Number(button.dataset.lightboxStep);
      activeScreenshotIndex =
        (activeScreenshotIndex + step + activeLightboxItems.length) % activeLightboxItems.length;
      renderLightbox();
    });
  });

  bindImageZoomTriggers();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (lightboxLayer && !lightboxLayer.hidden) closeLightbox();
      else if (modalLayer && !modalLayer.hidden) closeModal();
      else if (nav?.classList.contains("is-open")) closeNav();
    }

    if (!lightboxLayer || lightboxLayer.hidden || activeLightboxItems.length < 2) return;

    if (event.key === "ArrowRight") {
      activeScreenshotIndex = (activeScreenshotIndex + 1) % activeLightboxItems.length;
      renderLightbox();
    }

    if (event.key === "ArrowLeft") {
      activeScreenshotIndex =
        (activeScreenshotIndex - 1 + activeLightboxItems.length) % activeLightboxItems.length;
      renderLightbox();
    }
  });

  console.info("Portfolio loaded:", site.languageCode, shared.year);
})();
