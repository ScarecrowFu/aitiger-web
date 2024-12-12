interface Tool {
  name: string;
  desc: string;
  logo?: string;
  link?: string;
}

interface ToolSection {
  title: string;
  items: Tool[];
}

interface UpdateTool {
  name: string;
  link: string | null;
}

interface UpdateLog {
  date: string;
  title: string;
  tools: (string | UpdateTool)[];
}

interface CourseMaterial {
  name: string;
  link: string;
}

interface PublicCourse {
  title: string;
  platforms: string[];
  materials: CourseMaterial[];
}

export interface ToolsContent {
  hero: {
    title: string;
    description: string;
  };
  toolboxInstructions: string[];
  updateLogs: UpdateLog[];
  publicCourses: PublicCourse[];
  toolboxSections: ToolSection[];
  successCases: string[];
  cta: {
    link: string;
    text: string;
  };
  defaultLogo: string;
} 