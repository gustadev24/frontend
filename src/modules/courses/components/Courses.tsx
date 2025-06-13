import { Link } from '@/modules/core/ui/link';

interface CourseProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

function Course({ description, imageUrl, link, title }: CourseProps) {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        <Link href={link} className="mt-3" variant={'secondary'}>
          View Course
        </Link>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-video object-cover rounded-[12px] max-w-sm justify-self-end"
      />
    </div>
  );
}
export default function Courses() {
  // mockear use Course
  const courses: CourseProps[] = [
    {
      title: 'Curso de React',
      description: 'Aprende React desde cero con este curso completo.',
      link: '/courses/react',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
    {
      title: 'Curso de Next.js',
      description: 'Domina Next.js y crea aplicaciones web modernas.',
      link: '/courses/nextjs',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
    {
      title: 'Curso de TypeScript',
      description: 'Aprende TypeScript y mejora tu código JavaScript.',
      link: '/courses/typescript',
      imageUrl:
        'https://ynoa-uploader.ynoacamino.site/uploads/1749595995_Depth%206%2C%20Frame%201.png',
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {courses.map((course) => (
        <Course
          key={course.title}
          title={course.title}
          description={course.description}
          link={course.link}
          imageUrl={course.imageUrl}
        />
      ))}
    </div>
  );
}
