import type { Module } from '@/modules/core/types/modules';

export interface Post {
  title: string;
  author: string;
  chapter: string;
  content: string;
  module: Module;
  id: string;
  excerpt: string;
}

export interface CreatePost {
  moduleId: number;
  title: string;
  content: string;
  imagesPath?: string[];
  status?: 'draft' | 'published';
  visibility?: 'public' | 'private';
  userCreatorId: number;
  userEditorId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdatePost {
  id: number;
  title?: string;
  content?: string;
  imagesPath?: string[];
  status?: 'draft' | 'published';
  visibility?: 'public' | 'private';
  userEditorId?: number;
  updatedAt?: Date;
}
