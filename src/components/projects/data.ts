export interface IProject {
  index?: number;
  name: string;
  img: {
    src: string;
    authorship?: string;
  };
  descriptions: string[];
  keywords?: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "V 컬러링",
    img: { src: "project-vcoloring.mp4" },
    descriptions: [
      "동영상 컬러링 앱 개발",
      "하이브리드 앱 개발",
      "성능 최적화",
    ],
    keywords: ["react", "typescript", "redux"],
  },
  {
    name: "건물관리 시스템",
    img: { src: "project-capstec.png" },
    descriptions: [
      "IoT 기반 원격 시설 모니터링 서비스 개발",
      "cross browsing 지원",
    ],
    keywords: ["nextjs", "react", "typescript", "dygraph"],
  },
  {
    name: "대기질 모니터링",
    img: { src: "project-air.png" },
    descriptions: [
      "IoT 기반 대기질 모니터링 시스템 개발",
      "cross browsing 지원",
    ],
    keywords: ["react", "redux", "dygraph", "webpack"],
  },
  {
    name: "T world",
    img: { src: "project-tworld.jpg" },
    descriptions: [
      "SKT 통합서비스 모바일 웹 frontend 개발",
      "cross browsing 지원",
    ],
    keywords: ["node", "typescript", "es5", "es6", "jquery"],
  },
  {
    name: "vingle",
    img: {
      src: "project-vingle.png",
    },
    descriptions: [
      "vingle.net frontend 개발(SPA)",
      "routing 모듈 개선",
      "cross browsing 지원",
    ],
    keywords: ["react", "redux", "typescript", "node", "sass"],
  },
  {
    name: "layout framework",
    img: {
      src: "project-framework.jpg",
      authorship: "Photo by Josh Calabrese on Unsplash",
    },
    descriptions: [
      "layout framework 설계 및 개발",
      "layout 속도 6배 이상 향상",
    ],
    keywords: ["javascript", "polymer", "jquery", "html5", "css"],
  },
  {
    name: "cross platform",
    img: {
      src: "project-cross.jpg",
      authorship: "Photo by Caspar Camille Rubin on Unsplash",
    },
    descriptions: ["UI application 개발용 framework 설계 및 개발"],
    keywords: ["java", "c#", "android", "WPF", "eclipse"],
  },
];
