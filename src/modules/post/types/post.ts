export interface Post {
  title: string;
  author: string;
  chapter: string;
  content: string;
  module: Module;
  id: string;
  excerpt: string;
}

export interface Module {
  title: string;
  description: string;
}
