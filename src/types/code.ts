interface IntroSection {
  title: string;
  content: string[];
}

interface CourseItem {
  text: string;
  subitems?: string[];
}

interface CourseChapter {
  title: string;
  items: CourseItem[];
}

export interface CodeContent {
  hero: {
    title: string;
    description: string;
  };
  introContent: IntroSection[];
  courseOutline: CourseChapter[];
  cta: {
    link: string;
    text: string;
  };
} 