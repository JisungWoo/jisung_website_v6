import { melodyMapScreenshots } from "./shared.mjs";

export const koProjects = [
  {
    id: "melodymap",
    title: "MelodyMap",
    meta: "제품 개발 · 2026년 4월 - 현재",
    summary:
      "음악치료사의 반복 업무를 줄이기 위한 실무형 운영 플랫폼입니다. 일정, 기관 정보, 세션 준비, 계획 작성, 이동 기록처럼 현장에서 흩어지기 쉬운 업무를 하나의 흐름으로 묶는 데 초점을 맞추고 있습니다.",
    tags: ["헬스테크 SaaS", "업무 흐름", "AI 기반 계획"],
    imagePair: ["Files/MelodyMap.ai/Dashboard.png", "Files/MelodyMap.ai/PlanSutdio-Plan.png"],
    imagePairLabels: ["운영 대시보드", "Plan Studio 출력"],
    screenshots: melodyMapScreenshots,
    bullets: [
      "MelodyMap을 단순한 챗봇이나 기록 도구가 아니라 세션 준비, 진행, 사후 정리를 하나로 잇는 음악치료사용 업무 플랫폼으로 정의했습니다.",
      "캘린더를 연동하면 방문 일정, 기관 정보, 준비 항목, 이동 기록이 자연스럽게 이어지고, 기관별로 쌓인 맥락을 다음 방문에도 활용할 수 있도록 설계하고 있습니다.",
      "프론트엔드는 TypeScript 기반 Next.js 15, 백엔드는 FastAPI로 구성했으며, 서비스 계층과 리포지토리 계층을 분리해 PostgreSQL, async SQLAlchemy, Alembic 중심의 운영 구조를 잡았습니다.",
      "세션 계획은 도입, 활동, 진행 스크립트, 변형, 마무리 등 블록 단위로 생성됩니다. PostgreSQL과 pgvector에 저장한 과거 세션 회고를 유사도 검색해 기관별 맥락이 다음 계획에 반영되도록 설계했습니다.",
      "벡터 유사도와 도메인 신호(대상군 특성, 치료사 레퍼토리, 과거 세션 결과)를 결합한 결정론적 추천 엔진을 기준 데이터로 사용하고, LLM은 설명 문구만 생성하도록 역할을 분리해 임상 정보의 환각 위험을 낮췄습니다.",
      "보호 대상 건강 정보(PHI)가 LLM 호출에 포함되지 않도록 PHI 최소화 파이프라인을 구축했습니다. 프롬프트에는 정제된 맥락만 전달하고, 감사 로그에는 원문 대신 해시값만 남깁니다.",
      "AI 코딩 에이전트를 핵심 개발 도구로 활용하고, 독립된 AI 리뷰 단계와 3단계 CI/CD 환경(Dev, QA, Prod), 의존성·보안 점검(OWASP Top 10 감사 포함)을 통해 변경 사항을 검증합니다.",
    ],
    links: [],
  },
  {
    id: "capstone",
    title: "MS-BA 캡스톤: 테니스 퍼포먼스 분석",
    meta: "Arizona State University · 2024년 6월 - 2024년 12월",
    summary:
      "YOLOv8과 OpenCV를 활용해 경기 영상에서 선수 퍼포먼스 지표를 추출한 컴퓨터 비전 프로젝트입니다.",
    tags: ["머신러닝", "Python", "YOLOv8", "OpenCV"],
    imagePair: ["Files/Project_Icons/Capstone_Title_Page.jpg", "Files/Project_Icons/Capstone_Agenda.jpg"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "YOLOv8과 OpenCV 기반으로 경기 영상에서 선수 퍼포먼스를 추출하는 파이프라인을 구축했습니다.",
      "공 속도와 라켓 움직임을 추적하고 Python, Jupyter로 CSV 기반 결과를 자동 생성했습니다.",
      "영상 트리밍 최적화와 AI 기반 탐지를 통해 20,000건 이상 규모의 경기 분석 시간을 약 90% 줄였습니다.",
    ],
    links: [
      {
        label: "발표 자료 다운로드",
        url: "Files/Performance Analytics - Tennis Video Analysis (2024 Capstone).pptx",
        download: true,
      },
    ],
  },
  {
    id: "ksa",
    title: "ASU 한인학생회 웹사이트",
    meta: "Arizona State University 한인학생회 · 2020년 9월 - 2021년 3월",
    summary:
      "팀 리딩, 프론트엔드 구현, GitHub 협업 체계 정리를 함께 맡아 구축한 학생 단체 웹사이트입니다.",
    tags: ["HTML/CSS/JS", "팀 리드", "GitHub"],
    imagePair: ["Files/Project_Icons/ksa_logo.jpg", "Files/Project_Icons/ASUforksa.png"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "7인 팀을 공동 리드하며 ASU 한인학생회 사이트의 기획, 개발, 출시를 이끌었습니다.",
      "마일스톤과 마감 일정을 기준으로 역할을 나누고 진행 상황을 관리했습니다.",
      "HTML, CSS, JavaScript 기반 프론트엔드를 주도하며 반응형 UI를 구현했습니다.",
      "GitHub 협업 방식과 웹 개발 기본기를 팀원들과 공유해 이후 유지보수가 가능하도록 했습니다.",
    ],
    links: [{ label: "저장소 보기", url: "https://github.com/JisungWoo/ksa_website" }],
  },
  {
    id: "portfolio",
    title: "개인 포트폴리오 웹사이트",
    meta: "개인 프로젝트 · 2024년 7월 - 현재",
    summary:
      "여러 버전으로 발전시켜 온 반응형 포트폴리오 사이트입니다. AI 보조 편집을 활용하면서도 정보 구조와 시각적 완성도를 계속 다듬었습니다.",
    tags: ["HTML/CSS/JS", "GitHub Pages", "포트폴리오 디자인"],
    imagePair: ["Files/Project_Icons/Personal_Portfolio_V1_2.jpg", "Files/Project_Icons/Personal_Portfolio_V3.jpg"],
    containFirstImage: true,
    screenshots: [],
    bullets: [
      "반응형 포트폴리오를 직접 구축하고 정보 구조, 인터랙션, 시각적 위계를 계속 개선했습니다.",
      "AI 보조 편집으로 문구와 레이아웃 방향을 빠르게 실험하면서도 포트폴리오의 의도와 소유권은 직접 유지했습니다.",
      "GitHub Pages로 여러 버전을 실제 배포하며 디자인 변경을 실제 환경에서 검증했습니다.",
    ],
    links: [
      { label: "버전 1", url: "https://jisungwoo.github.io/jisung_website/" },
      { label: "버전 2", url: "https://jisungwoo.github.io/jisung_website_v2/" },
      { label: "버전 3", url: "https://jisungwoo.github.io/jisung_website_v3/" },
      { label: "버전 4", url: "https://jisungwoo.github.io/jisung_website_v4/" },
    ],
  },
  {
    id: "paypal",
    title: "PayPal Opportunity Hackathon - 1위",
    meta: "해커톤 프로젝트 · 2016년 10월",
    summary:
      "3인 팀으로 비영리단체를 위한 기부자 소통 도구를 구축해 1위를 수상한 해커톤 프로젝트입니다.",
    tags: ["해커톤", "1위", "HTML/CSS/JS"],
    imagePair: ["Files/Project_Icons/Paypal_Opportunity_Hackathon.jpg", "Files/Project_Icons/Paypal_Opportunity_Hackathon_2.jpg"],
    containFirstImage: true,
    containSecondImage: true,
    screenshots: [],
    bullets: [
      "3인 팀으로 Matthew's Crossing을 위한 웹 기반 기부자 소통 도구를 개발했습니다.",
      "HTML, CSS, JavaScript로 맞춤형 인터페이스와 자동 이메일 발송 기능을 구현했습니다.",
      "직원의 수작업 커뮤니케이션 부담을 줄이고 기부자 관리 흐름을 개선했습니다.",
      "완성도 높은 결과물을 발표해 PayPal Opportunity Hackathon에서 1위를 수상했습니다.",
    ],
    links: [{ label: "Devpost 보기", url: "https://devpost.com/software/matthews-crossing-data-manager" }],
  },
];
