interface AppItem {
  title: string;
  desc: string;
  image: string;
  link: string;
  tags: string[];
  status: 'online' | 'development';
  github?: string;
}

export interface AppsContent {
  hero: {
    title: string;
    description: string;
  };
  apps: AppItem[];
  more: {
    text: string;
    cta: {
      text: string;
      link: string;
    };
  };
} 