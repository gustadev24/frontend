import type { CreatePost, Post, UpdatePost } from '../types/posts';

const createPost = async (cPost: CreatePost) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cPost),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  const post = await response.json();

  return post as Post;
};

const updatePost = async (uPost: UpdatePost) => {
  const response = await fetch(`/api/posts/${uPost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uPost),
  });

  if (!response.ok) {
    throw new Error('Failed to edit post');
  }

  const post = await response.json();

  return post as Post;
};

const deletePost = async (postId: number) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete post');
  }

  return response.status === 204;
};

const listPostsByModuleId = async (moduleId: number) => {
  const response = await fetch(`/api/posts/module/${moduleId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts for module');
  }

  const posts = await response.json();

  return posts as Post[];
};

const getMyCourses = async () => {
  const response = await fetch('/api/courses/my');
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

const getMyGrades = async () => {
  const response = await fetch('/api/grades/my');
  if (!response.ok) {
    throw new Error('Failed to fetch grades');
  }
  return response.json();
};

export {
  getMyCourses,
  getMyGrades,
  createPost,
  updatePost,
  deletePost,
  listPostsByModuleId,
};
