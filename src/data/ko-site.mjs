import { dataResumeHref, githubHref, linkedinHref } from "./shared.mjs";

export const koSite = {
  languageCode: "ko",
  pagePath: "index_kr.html",
  title: "Jisung Woo | 시니어 데이터 엔지니어",
  description:
    "경영진과 비즈니스의 핵심 과제를 데이터 거버넌스를 갖춘 Snowflake 솔루션으로 구현하는 시니어 데이터 엔지니어 포트폴리오입니다.",
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
        proof: ["데이터 엔지니어링 경력 5년+", "Snowflake EDW", "글로벌 개발팀 조율"],
        profile: {
          eyebrow: "시니어 데이터 엔지니어",
          title: "모호한 비즈니스 요구를 신뢰할 수 있는 데이터 솔루션으로.",
          summary:
            "경영진과 비즈니스 조직의 요구를 Snowflake 데이터 모델과 기술 요구사항으로 구체화하고, 글로벌 개발팀의 구현을 조율합니다. 접근 권한이 제한된 QA·운영 데이터 검증과 복잡한 SQL 디버깅까지 직접 수행합니다.",
          resumeLabel: "시니어 데이터 엔지니어 이력서",
          actions: [
            { label: "이력서 보기", href: dataResumeHref, newTab: true },
            { label: "이력서 다운로드", href: dataResumeHref, download: true },
          ],
          proof: [
            { label: "현재 플랫폼", value: "Snowflake EDW" },
            { label: "협업 범위", value: "디렉터·VP급" },
            { label: "개발 방식", value: "글로벌 개발팀" },
          ],
          roleProof: [
            { label: "요구사항 구체화", value: "경영진·비즈니스 과제" },
            { label: "아키텍처", value: "신규 데이터 모델" },
            { label: "개발 협업", value: "글로벌 팀 조율" },
            { label: "품질 검증", value: "접근 제한 데이터 검증" },
            { label: "AI 활용", value: "Cortex Agent" },
            { label: "문제 해결", value: "복잡한 SQL 디버깅" },
          ],
          highlights: [
            "디렉터 및 VP급 경영진의 요구를 지표, 기술 요구사항, 비즈니스 로직, 완료 기준으로 구체화합니다.",
            "데이터 모델과 솔루션 아키텍처를 공동 설계한 뒤 글로벌 개발팀의 구현과 릴리스 준비를 이끕니다.",
            "QA·운영 데이터 결과가 비즈니스 기대와 다를 때 직접 검증하고 원인을 분석해 해결 방향을 제시합니다.",
          ],
          methodTitle: "요구사항을 실제 결과로 만드는 방식.",
          archiveEyebrow: "초기 프로젝트",
          archiveTitle: "처음부터 끝까지 직접 만들어 본 프로젝트.",
          archiveSummary:
            "학생 및 초기 웹 프로젝트도 성장 과정의 일부로 남겼습니다. 작은 프로젝트에서도 문제를 정의하고, 팀을 이끌고, 실제 결과물을 출시해 온 과정을 보여줍니다.",
          archiveProjectIds: ["ksa", "portfolio", "paypal"],
          projectsTitle: "주요 데이터 엔지니어링 경험",
          projects: [
            {
              title: "엔터프라이즈 Snowflake 데이터 딜리버리",
              meta: "Honeywell Aerospace · Data Engineer II",
              body:
                "신규 아키텍처 설계부터 글로벌 개발팀 협업, 접근 제한 데이터 QA, 성능 튜닝까지 Snowflake 딜리버리 전반을 담당했으며, 전체 적재 시간을 83% 단축했습니다.",
              tags: ["Snowflake", "SQL 성능 튜닝", "개발 딜리버리 리딩"],
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
            title: "기획부터 아키텍처와 운영까지 직접 만든 제품.",
            summary:
              "MelodyMap.ai는 회사 업무와 별도로 진행하는 개인 프로젝트입니다. 아키텍처, 프라이버시 설계, 구조화된 데이터, AI 연동, 엔드투엔드 워크플로우에 대한 오너십을 보여줍니다.",
            projects: [
              {
                title: "MelodyMap.ai",
                meta: "Founder · 2026년 4월 - 현재",
                body:
                  "캘린더 정보, 재사용 가능한 기관 프로필, 구조화된 세션 플랜, 디브리프, 이동 거리 추적을 활용해 음악치료사의 계획 및 문서 작성 업무를 줄이는 AI 기반 워크플로우 플랫폼을 설계하고 있습니다.",
                tags: ["PostgreSQL", "FastAPI", "Gemini"],
                media: { src: "Files/MelodyMap.ai/PlanSutdio-Plan.png", alt: "MelodyMap Plan Studio 화면" },
                actions: [
                  { label: "프로젝트 상세 보기", kind: "modal", projectId: "melodymap" },
                  { label: "QA 버전 보기", href: "https://qa.melodymap.ai/", newTab: true },
                ],
              },
            ],
          },
          skillsTitle: "시니어 데이터 엔지니어 역량",
          capabilitiesSummary:
            "비즈니스 지표를 데이터 아키텍처와 엔지니어링 실행으로 연결해, 신뢰할 수 있는 결과로 완성하는 것이 가장 큰 강점입니다.",
          capabilityGroups: [
            {
              title: "데이터",
              items: [
                "Snowflake",
                "SQL",
                "데이터 모델링",
                "ETL/ELT",
                "데이터 웨어하우징",
                "SQL Server",
                "Informatica",
                "Control-M",
                "Azure Data Factory",
                "SSIS",
                "Power BI",
              ],
            },
            {
              title: "엔지니어링 실무",
              items: ["SQL 성능 튜닝", "데이터 품질", "Source-to-Target 매핑", "데이터 리니지", "Git"],
            },
            {
              title: "AI 활용",
              items: ["Snowflake Cortex Agents", "Gemini", "AI 기반 제품 개발"],
            },
            {
              title: "리더십",
              items: ["솔루션 아키텍처", "경영진 커뮤니케이션", "글로벌 개발 딜리버리", "요구사항 구체화", "QA 및 데이터 검증"],
            },
            {
              title: "언어",
              items: ["영어·한국어 — 원어민 수준의 이중언어 구사"],
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
        bullets: [
          "1,000만 건 이상, 200개 이상 컬럼으로 구성된 다계층 Snowflake 파이프라인의 전체 적재 시간을 최대 3시간에서 30분으로 단축했습니다. 비용이 큰 중첩 뷰 의존성을 대체하고 불필요한 조인과 CTE를 제거했으며, 필요한 컬럼만 변환하도록 최적화해 실행 시간을 83% 줄였습니다.",
          "경영진 대상 분석 과제의 기술 딜리버리를 리드하며, 디렉터와 시니어 리더, 재무, 공급망, EDW 팀과 직접 협업해 모호한 비즈니스 우선순위를 거버넌스가 적용된 Snowflake 솔루션으로 구체화합니다.",
          "엔터프라이즈 데이터 아키텍트와 Executive Cockpit의 신규 EDW 아키텍처 및 데이터 모델을 공동 설계하고, 원천 데이터 매핑, 비즈니스 로직, 데이터 그레인, 완료 기준, 단계별 데이터 수집 요구사항을 정의합니다.",
          "글로벌 엔지니어링 업무를 조율하며, 과제별로 지정된 DE Lead를 통해 2~5명의 엔지니어를 이끌고 약 12명 규모의 인력 풀이 참여하는 여러 프로젝트를 동시에 지원합니다.",
          "실제 환경에 접근할 수 없는 글로벌 엔지니어들의 접근 제한 데이터 QA 검증을 담당합니다. 워크플로우를 실행하고 중복 및 누락 값을 분석하며, 20개 이상의 엔터프라이즈 데이터 모델에 대한 릴리스 준비를 조율합니다. 이 가운데 재무, 구매, 운영 영역의 복잡한 모델 3개를 중점적으로 담당합니다.",
          "기술 메타데이터 자동화를 위한 Snowflake Cortex Agent 프로토타입을 개발했습니다. 수백 개 컬럼의 비즈니스 정의와 Source-to-Target 리니지를 자동 생성하며, 초기 테스트에서 약 90%의 매핑 정확도를 달성하고 초안 작성 시간을 4시간 이상에서 수분으로 단축했습니다.",
        ],
      },
      {
        id: "asuep",
        company: "ASU Enterprise Partners",
        role: "Data Engineer I",
        period: "2022.03 - 2024.07",
        location: "Tempe, AZ",
        bullets: [
          "SSIS, Azure Data Factory, SQL Server를 활용해 Salesforce, Workday, Azure Blob Storage 전반의 엔터프라이즈 ETL/ELT 파이프라인을 현대화하고, 여러 시스템의 데이터를 분석 및 리포팅용으로 중앙화했습니다.",
          "SQL Server 저장 프로시저와 자동화된 데이터 품질 검증 로직을 개발해 중복 레코드를 해결하고 Power BI 새로 고침 안정성을 높였으며, 복잡한 리포트 레벨 DAX 로직을 거버넌스가 적용된 웨어하우스 로직으로 대체했습니다.",
        ],
      },
      {
        id: "oracle-cerner",
        company: "Oracle Cerner",
        role: "Technical Solution Analyst",
        period: "2021.02 - 2022.03",
        location: "Kansas City, MO",
        bullets: [
          "Oracle SQL, 로그, 모니터링을 활용해 대량의 운영 데이터 및 애플리케이션 이슈를 해결했으며, 헬스케어 SLA를 준수하면서 90% 이상의 고객 만족도를 유지했습니다.",
          "고객 및 엔지니어링 팀과 협업해 데이터 무결성 문제를 분석하고 안전하게 SQL 업데이트를 수행하여 24시간 운영되는 헬스케어 환경의 데이터 흐름을 안정화했습니다.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "학력",
    title: "학업에서 실무로 이어진 성장.",
    body: "학업에서 쌓은 분석력과 구조적 사고를 실무 문제 해결 역량으로 확장해 왔습니다.",
    items: [
      {
        label: "석사",
        degree: "M.S. in Business Analytics",
        school: "W. P. Carey School of Business, Arizona State University",
        period: "2023.08 - 2024.12",
        detail: "GPA 4.0 · 우수한 성적으로 졸업",
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
  footer: "실제로 맡은 역할과 검증 가능한 결과를 중심으로 구성한 시니어 데이터 엔지니어 포트폴리오입니다.",
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
