import profileData from '../data/profile.json';
import aboutData from '../data/about.json';
import experienceData from '../data/experience.json';
import projectsData from '../data/projects.json';
import contactData from '../data/contact.json';
import type { Profile, AboutData, ExperienceData, ProjectsData, ContactData } from '../types';

export const useProfile = (): Profile => profileData as Profile;
export const useAboutData = (): AboutData => aboutData as AboutData;
export const useExperienceData = (): ExperienceData => experienceData as ExperienceData;
export const useProjectsData = (): ProjectsData => projectsData as ProjectsData;
export const useContactData = (): ContactData => contactData as ContactData;
