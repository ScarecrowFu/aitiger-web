interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  desc: string;
}

interface Milestone {
  date: string;
  title: string;
  desc: string;
}

interface Value {
  title: string;
  desc: string;
  icon: string;
}

interface ContactInfo {
  type: 'wechat' | 'mp' | 'email';
  label: string;
  value: string;
}

export interface AboutContent {
  hero: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    content: string[];
  };
  values: {
    title: string;
    list: Value[];
  };
  team: {
    title: string;
    members: TeamMember[];
  };
  milestones: {
    title: string;
    list: Milestone[];
  };
  contact: {
    title: string;
    list: ContactInfo[];
  };
} 