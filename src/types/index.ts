export interface NavItem {
  label: string;
  id: string;
}

export interface Social {
  linkedin: string;
  email: string;
  github: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  social: Social;
  navigation: NavItem[];
}

export interface AboutData {
  paragraphs: string[];
  skills: string[];
}

export interface CompanyEntry {
  company: string;
  title: string;
  period: string;
  descriptions: string[];
  skills: string[];
}

export interface ExperienceData {
  companies: CompanyEntry[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  mediaType: 'image' | 'video';
  skills: string[];
  links: Record<string, string>;
}

export interface OtherProject {
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectsData {
  featured: FeaturedProject[];
  other: OtherProject[];
}

export interface ContactData {
  heading: string;
  message: string;
  email: string;
  buttonText: string;
}
