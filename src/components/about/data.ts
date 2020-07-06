export interface ICompany {
  name: string;
  skills: string[];
  period: string;
  job: string;
}

export const COMPANIES: ICompany[] = [
  {
    name: "SK Planet Co.",
    skills: ["typescript", "react", "redux", "node", "webpack"],
    period: "2018.06 - 현재",
    job: "Web(PC, mobile) front-end 개발",
  },
  {
    name: "Vingle Co.",
    skills: ["typescript", "react", "redux", "SSR"],
    period: "2018.01 - 2018.06",
    job: "vingle.net(PC, mobile) front-end 개발",
  },
  {
    name: "Tmax soft Co.",
    skills: ["javascript", "java", "android", "WPF", "c#"],
    period: "2015.02 - 2017.11",
    job: "Enterprise용 UI platform, framework 설계 및 개발",
  },
];
