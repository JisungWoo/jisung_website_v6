import { melodyMapScreenshots } from "./shared.mjs";

export const koProjects = [
  {
    id: "melodymap",
    title: "MelodyMap",
    meta: "Founder · 2026년 4월 - 현재",
    summary:
      "음악치료사의 계획 및 문서 작성 업무를 줄이기 위한 AI 기반 워크플로우 플랫폼입니다.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini"],
    imagePair: ["Files/MelodyMap.ai/Dashboard.png", "Files/MelodyMap.ai/PlanSutdio-Plan.png"],
    imagePairLabels: ["운영 대시보드", "Plan Studio 출력"],
    screenshots: melodyMapScreenshots,
    bullets: [
      "캘린더 정보, 재사용 가능한 기관 프로필, 구조화된 세션 플랜, 디브리프, 이동 거리 추적을 활용해 음악치료사의 계획 및 문서 작성 업무를 줄이는 AI 기반 워크플로우 플랫폼을 설계하고 있습니다.",
      "Next.js, FastAPI, PostgreSQL 기반의 계층형 시스템을 설계하고, 서버 측 모델 게이트웨이를 통해 Gemini를 연동했습니다. 구조화된 출력, 감사 추적성, 개인정보 보호를 고려한 데이터 경계를 적용했습니다.",
    ],
    links: [{ label: "QA 버전 보기", url: "https://qa.melodymap.ai/" }],
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
      "AI 보조 편집으로 문구와 레이아웃을 빠르게 실험하면서도 기획 의도와 최종 디자인 판단은 직접 유지했습니다.",
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
