import useSWR from 'swr';
import type { Post } from '@/modules/post/types/post';

const getMockPost = (id: string): Post => ({
  title: 'Introduction to TypeScript',
  author: 'John Doe',
  chapter: 'Chapter 1',
  content: `
## Markdown para Principiantes
Bienvenido a este artículo. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.. Aquí exploraremos cómo escribir contenido en **Markdown**, un formato ligero para redactar texto con _estilo_

![test](https://ynoa-uploader.ynoacamino.site/uploads/1749959802_IMG_6345-scaled-scaled%20%281%29.webp)

## Introducción

Markdown es muy útil para:

- Crear documentos rápidos
- Escribir artículos técnicos
- Redactar documentación

También puedes hacer listas numeradas:

1. Instalar Markdown
2. Escribir contenido
3. Convertir a HTML

## Formato de Texto

Puedes aplicar estilos fácilmente:

- **Negrita**
- *Cursiva*
- ~~Tachado~~

### Citas

> Este es un ejemplo de cita. Puedes usarlo para destacar ideas o fragmentos de otros autores.

### Bloques de código
\`\`\`javascript
const greeting = 'Hello, Javascript!';
console.log(greeting);
\`\`\`
`,
  module: {
    title: 'TypeScript Basics',
    description: 'An introduction to TypeScript and its features.',
  },
  excerpt: 'An introduction to TypeScript and its features.',
  id,
});

const getOnePost = async ({ postId }: { postId: string }): Promise<Post> => {
  const POST: Post = getMockPost(postId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POST);
    }, 1000);
  });
};

export const useOnePost = ({ postId }: { postId: string }) => {
  const { data, isLoading, mutate } = useSWR('onePost', () =>
    getOnePost({ postId }),
  );

  return {
    post: data,
    isLoading,
    mutate,
  };
};

const getAllPosts = async (): Promise<Post[]> => {
  const POSTS: Post[] = Array.from({ length: 10 }, (_, i) =>
    getMockPost(`post-${i + 1}`),
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS);
    }, 1000);
  });
};

export const useAllPosts = () => {
  const { data, isLoading, mutate } = useSWR('onePost', () => getAllPosts());

  return {
    posts: data,
    isLoading,
    mutate,
  };
};
