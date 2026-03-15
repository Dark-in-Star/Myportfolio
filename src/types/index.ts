export interface PortfolioDetails {
  initial: string;
  name: string;
  "name-size": string;
  "user-email": string;
  Qual: string;
  "Qual-size": string;
  ResumeURL: string;
  photoURL: string;
  desc: string;
  footerdesc: string;
  footerslogan: string;
  maploactionURL: string;
}

export interface Project {
  src: string;
  href: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export interface SkillCategory {
  name: string;
  img: string;
}

export interface SkillGroup {
  name: string;
  category: SkillCategory[];
}

export interface Social {
  name: string;
  logo: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}
