import { dataResumeHref, githubHref, linkedinHref } from "./shared.mjs";

export const koSite = {
  languageCode: "ko",
  pagePath: "index_kr.html",
  title: "Jisung Woo | 시니어 데이터 엔지니어",
  description:
    "경영진과 현업의 핵심 과제를 데이터 거버넌스를 갖춘 Snowflake 솔루션으로 구현하는 시니어 데이터 엔지니어 포트폴리오입니다.",
  localeSwitch: { label: "EN", text: "English", href: "index.html" },
  hero: {
    name: "Jisung Woo",
    photoAlt: "Arizona State University 졸업 가운을 입은 Jisung Woo.",
    logoLabel: "주요 경력",
  },
  career: {
    tracks: [
      {
        id: "data-engineer",
        tone: "data",
        media: "Files/Profile_Pic_Graduation.jpg",
        mediaAlt: "Arizona State University 졸업 가운을 입은 Jisung Woo.",
        title: "시니어 데이터 엔지니어",
        subtitle: "엔터프라이즈 데이터 엔지니어링 + AI 활용",
        proof: ["데이터 경력 5년+", "Snowflake EDW", "분산 개발팀 협업"],
        profile: {
          eyebrow: "시니어 데이터 엔지니어",
          title: "모호한 비즈니스 요구를 신뢰할 수 있는 데이터 솔루션으로.",
          summary:
            "경영진과 현업의 요구사항을 Snowflake 데이터 모델과 기술 요건으로 구체화하고, 해외 분산 개발팀의 구현을 주도합니다. 접근 권한이 제한된 QA·운영 데이터 검증과 복잡한 SQL 문제 분석까지 직접 수행합니다.",
          resumeLabel: "시니어 데이터 엔지니어 이력서",
          actions: [
            { label: "이력서 보기", href: dataResumeHref, newTab: true },
            { label: "이력서 다운로드", href: dataResumeHref, download: true },
          ],
          proof: [
            { label: "현재 플랫폼", value: "Snowflake EDW" },
            { label: "협업 범위", value: "디렉터·VP급" },
            { label: "개발 방식", value: "해외 분산 개발팀" },
          ],
          roleProof: [
            { label: "요구사항 구체화", value: "경영진·현업 과제" },
            { label: "아키텍처", value: "신규 데이터 모델" },
            { label: "개발 협업", value: "해외 개발팀 조율" },
            { label: "품질 검증", value: "접근 제한 데이터" },
            { label: "AI 활용", value: "Cortex Agent" },
            { label: "문제 해결", value: "복잡한 SQL 분석" },
          ],
          highlights: [
            "디렉터 및 VP급 경영진의 요구를 지표, 개발 스토리, 비즈니스 로직, 인수 기준으로 구체화합니다.",
            "데이터 모델과 솔루션 아키텍처를 공동 설계한 뒤 해외 분산 개발팀의 구현과 릴리스 준비를 이끕니다.",
            "QA·운영 데이터 결과가 현업의 기대와 다를 때 직접 검증하고 원인을 분석해 해결 방향을 제시합니다.",
          ],
          methodTitle: "요구사항을 실제 결과로 연결하는 방식.",
          archiveEyebrow: "초기 프로젝트",
          archiveTitle: "주도성과 실행력을 키운 프로젝트.",
          archiveSummary:
            "학생 및 초기 웹 프로젝트도 성장 과정의 일부로 남겼습니다. 규모는 작았지만 업무를 정리하고, 팀의 기여를 돕고, 실제 결과물을 출시한 동일한 패턴을 보여줍니다.",
          archiveProjectIds: ["ksa", "portfolio", "paypal"],
          projectsTitle: "주요 데이터 엔지니어링 경험",
          projects: [
            {
              title: "엔터프라이즈 Snowflake 데이터 구축",
              meta: "Honeywell Aerospace · Data Engineer II",
              body:
                "경영진 요구사항 정의부터 신규 데이터 모델 설계, 해외 개발팀 구현, 접근 제한 데이터 검증, 릴리스 준비, 복잡한 SQL 분석까지 연결해 수행합니다.",
              tags: ["Snowflake", "데이터 모델링", "개발 협업 주도"],
            },
            {
              title: "엔터프라이즈 ETL 현대화",
              meta: "ASU Enterprise Partners · Data Engineer I",
              body:
                "SSIS, Azure Data Factory, SQL Server, Power BI 자동화와 Salesforce·Workday·Azure Blob Storage 통합 경험입니다.",
              tags: ["ADF", "SSIS", "SQL Server"],
            },
            {
              title: "테니스 퍼포먼스 분석",
              meta: "M.S. Business Analytics 캡스톤",
              body: "YOLOv8과 OpenCV로 경기 영상에서 선수 퍼포먼스 지표와 분석 데이터를 추출한 파이프라인입니다.",
              tags: ["Python", "YOLOv8", "OpenCV"],
              actions: [{ label: "프로젝트 상세 보기", kind: "modal", projectId: "capstone" }],
            },
          ],
          aiWork: {
            eyebrow: "창업 프로젝트",
            title: "기획부터 운영까지 직접 설계한 제품.",
            summary:
              "MelodyMap.ai는 회사 업무와 별도로 진행하는 개인 프로젝트입니다. 아키텍처, 개인정보 보호 경계, 구조화 데이터, AI 연동, 전체 업무 흐름을 어떻게 설계하는지 보여줍니다.",
            projects: [
              {
                title: "MelodyMap.ai",
                meta: "Founder / Full-Stack AI Product Engineer",
                body:
                  "일정 정보, 기관 프로필, 구조화된 세션 계획, 세션 회고, 이동 거리 관리를 하나로 연결한 음악치료사용 업무 플랫폼입니다.",
                tags: ["PostgreSQL", "FastAPI", "Gemini"],
                media: { src: "Files/MelodyMap.ai/PlanSutdio-Plan.png", alt: "MelodyMap Plan Studio 화면" },
                actions: [{ label: "프로젝트 상세 보기", kind: "modal", projectId: "melodymap" }],
              },
            ],
          },
          skillsTitle: "시니어 데이터 엔지니어 역량",
          capabilitiesSummary:
            "현업이 사용하는 지표의 의미를 데이터 아키텍처와 개발 실행으로 연결하고, 신뢰할 수 있는 결과로 완성하는 역량이 가장 큰 강점입니다.",
          capabilityGroups: [
            {
              title: "웨어하우스 + 모델링",
              items: ["Snowflake EDW", "SQL 변환 로직", "데이터 모델링", "데이터 웨어하우징", "SQL Server"],
            },
            {
              title: "개발 운영 + 품질",
              items: ["ETL / ELT", "접근 제한 데이터 검증", "데이터 품질", "릴리스 준비", "개발 스토리"],
            },
            {
              title: "AI 활용",
              items: ["Snowflake Cortex Agents", "Gemini 연동", "구조화된 출력", "서버 측 모델 게이트웨이", "AI 보조 개발"],
            },
            {
              title: "기술 리더십",
              items: ["경영진 커뮤니케이션", "요구사항 구체화", "솔루션 아키텍처", "해외 개발팀 협업", "코드 수준 개선 방향"],
            },
          ],
        },
      },
    ],
  },
  experience: {
    eyebrow: "경력",
    intro:
      "업무 우선순위가 빠르게 바뀌고 데이터 접근이 제한된 환경에서도 요구사항을 명확히 정리하고, 설계부터 검증과 릴리스까지 일관되게 연결합니다.",
    items: [
      {
        id: "honeywell",
        company: "Honeywell Aerospace",
        role: "Data Engineer II",
        period: "2024.08 - 현재",
        location: "Phoenix, AZ",
        summary:
          "경영진 대상 분석 과제의 데이터 구축을 주도하며, 디렉터·시니어 디렉터 및 유관 부서와 협업해 핵심 지표를 정의하고 불명확한 요구사항을 구체화하여 Snowflake 솔루션으로 구현합니다.",
        bullets: [
          "엔터프라이즈 데이터 아키텍트와 Executive Cockpit의 데이터 모델 및 솔루션 아키텍처를 신규 설계하고, 개발 인계에 앞서 원천 데이터 매핑, 비즈니스 로직, 데이터 그레인, 인수 기준을 정의합니다.",
          "Executive Cockpit용 Snowflake Cortex Agent를 구축·고도화하고, 거버넌스가 적용된 EDW 데이터와 연계해 경영진이 대시보드 분석과 함께 자연어로 질문할 수 있는 환경을 구현합니다.",
          "비즈니스 요구사항을 개발 스토리로 구체화하고 구현 로직 설명, 결과 검토, 이슈 해소, 릴리스 준비 조율을 수행하며 해외 분산 개발팀의 업무를 주도합니다.",
          "QA 및 운영 환경의 접근 제한 데이터 검증을 총괄하며, 워크플로 실행과 결과 검증, 수천 줄 규모의 SQL 정의에서 발생한 중복·누락 값 분석, 코드 수준의 개선 방향 제시를 담당합니다.",
          "솔루션 방향, 진행 현황, 리스크, 데이터 품질 이슈를 디렉터 및 VP급 이해관계자에게 보고하고, 비즈니스 기대사항과 아키텍처·엔지니어링 제약 조건을 조율합니다.",
        ],
      },
      {
        id: "asuep",
        company: "ASU Enterprise Partners",
        role: "Data Engineer I",
        period: "2022.03 - 2024.07",
        location: "Tempe, AZ",
        summary: "SQL Server, Azure, Salesforce, Workday, Power BI 전반의 ETL/ELT 워크플로우를 현대화했습니다.",
        bullets: [
          "SSIS와 Azure Data Factory로 워크플로우를 구축·마이그레이션하고 엔터프라이즈 소스를 데이터 웨어하우스에 통합했습니다.",
          "Power BI 갱신 자동화, 중복 데이터 해결, 복잡한 DAX 의존성 감소를 위한 저장 프로시저와 품질 로직을 개발했습니다.",
        ],
      },
      {
        id: "oracle-cerner",
        company: "Oracle Cerner",
        role: "Technical Solution Analyst",
        period: "2021.02 - 2022.03",
        location: "Kansas City, MO",
        summary: "24/7 헬스케어 환경에서 운영 데이터와 애플리케이션 문제를 해결했습니다.",
        bullets: [
          "Oracle SQL, 로그, 모니터링을 활용해 대량의 이슈를 조사하며 90%+ 고객 만족도를 유지했습니다.",
          "고객 및 엔지니어링 팀과 데이터 무결성 문제, 안전한 SQL 업데이트, 데이터 흐름 안정화를 수행했습니다.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "학력",
    title: "학업에서 실무로 이어진 성장.",
    body: "학업 기록뿐 아니라 문서화와 구조적 사고를 직업적 강점으로 만든 변화도 중요하게 생각합니다.",
    items: [
      {
        label: "석사",
        degree: "M.S. in Business Analytics",
        school: "W. P. Carey School of Business, Arizona State University",
        period: "2023.08 - 2024.12",
        detail: "GPA 4.0 · 우수 졸업",
        image: "Files/2024_MS-BA_diploma.png",
        imageAlt: "경영 분석 석사 학위증",
        href: "Files/2024_MS-BA Diploma.pdf",
      },
      {
        label: "학사",
        degree: "B.S. in Computer Information Systems",
        school: "W. P. Carey School of Business, Arizona State University",
        period: "2016.08 - 2020.12",
        detail: "GPA 2.73",
        image: "Files/2020_CIS_diploma.png",
        imageAlt: "컴퓨터 정보 시스템 학사 학위증",
        href: "Files/2020_CIS_Diploma.pdf",
      },
    ],
  },
  contact: {
    eyebrow: "연락처",
    email: "jisungwoo9@gmail.com",
    copyLabel: "이메일 복사",
    copySuccess: "복사했습니다",
    actions: [
      { label: "LinkedIn", href: linkedinHref },
      { label: "GitHub", href: githubHref },
      { label: "이력서", href: dataResumeHref, download: true },
    ],
  },
  footer: "명확한 책임 범위와 신뢰할 수 있는 결과를 중심으로 구성한 시니어 데이터 엔지니어 포트폴리오입니다.",
  ui: {
    menu: "메뉴 열기",
    close: "닫기",
    openDetails: "상세 보기",
    viewCredential: "학위증 보기",
    closeDetails: "상세 닫기",
    viewScreenshots: "스크린샷 보기",
    previousImage: "이전 이미지",
    nextImage: "다음 이미지",
    screenshot: "스크린샷",
    zoomImage: "이미지 확대",
    fitImage: "화면에 맞추기",
    primaryNav: "주요 탐색",
    themeGroup: "테마",
    themeLight: "라이트",
    themeDark: "다크",
  },
};
