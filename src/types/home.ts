// Hero 区块类型
export interface HeroContent {
  title: string;
  description: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
}

// 课程区块类型
export interface CourseContent {
  title: string;
  description: string;
  courses: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  checkDetail: string;
}

// 工具箱区块类型
export interface ToolsContent {
  title: string;
  description: string;
  sections: Array<{
    title: string;
    items: Array<{
      name: string;
      desc: string;
    }>;
  }>;
  preview: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  checkDetail: string;
}

// 应用区块类型
export interface AppsContent {
  title: string;
  description: string;
  apps: Array<{
    title: string;
    desc: string;
    image: string;
    icon: string;
  }>;
  checkDetail: string;
}

// 资料区块类型
export interface ResourcesContent {
  title: string;
  description: string;
  sections: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  features: Array<{
    icon: string;
    text: string;
  }>;
  checkDetail: string;
}

// 关于区块类型
export interface AboutContent {
  title: string;
  description: string;
  contactInfo: Array<{
    type: string;
    label: string;
    value: string;
  }>;
  footer: {
    slogan: {
      main: string;
      sub: string;
    };
    copyright: {
      text: string;
      icp: {
        text: string;
        link: string;
      };
    };
  };
}

// AI编程区块类型
export interface ProgrammingContent {
  title: string;
  description: string;
  courses: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  checkDetail: string;
}

// 整个首页内容类型
export interface HomeContent {
  hero: HeroContent;
  courses: CourseContent;
  programming: ProgrammingContent;
  tools: ToolsContent;
  apps: AppsContent;
  resources: ResourcesContent;
  about: AboutContent;
} 