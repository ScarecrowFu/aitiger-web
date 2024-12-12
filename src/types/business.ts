// 课程大纲类型
interface CourseItem {
  text: string;
  link: string | null;
}

interface CourseChapter {
  title: string;
  items: CourseItem[];
}

interface TeachingAdvantage {
  title: string;
  items: string[];
}

export interface BusinessContent {
  hero: {
    title: string;
    description: string;
  };
  courseOutline: CourseChapter[];
  teachingAdvantages: TeachingAdvantage[];
  cta: {
    link: string;
    text: string;
  };
} 