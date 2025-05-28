export type NavItem = {
  title: string;
  href: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
};

export type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

export type TeamMemberType = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type ValueType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};