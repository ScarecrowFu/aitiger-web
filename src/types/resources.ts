interface ResourceItem {
  title: string;
  desc: string;
  icon?: string;
  link?: string;
  tags?: string[];
  downloadCount?: number;
}

interface ResourceSection {
  title: string;
  desc: string;
  items: ResourceItem[];
}

export interface ResourcesContent {
  hero: {
    title: string;
    description: string;
  };
  sections: ResourceSection[];
  cta: {
    link: string;
    text: string;
  };
} 