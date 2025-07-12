import { SupportedFields } from "@/modules/core/lib/field";
import type { Field } from "@/modules/core/types/field";
import { z } from "zod";

export const videosFormSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters long',
    }),
    description: z.string().min(10, {
        message: 'Description must be at least 10 characters long',
    }).max(500, {
        message: 'Description must be at most 500 characters long',
    }),
    course: z.string().min(1, {
        message: 'Course is required',
    }),
    module: z.string().min(1, {
        message: 'Module is required',
    }),
    file: z.custom<File>((value) => value instanceof File && value.size > 0, {
        message: 'File is required and must be a valid file',
    })
});

export const videoFormFields: Field<
    keyof z.infer<typeof videosFormSchema>
>[] = [
    {
        name: 'title',
        label: 'Title',
        placeholder: 'e.g. Introduction to React - Video 1',
        description: 'The title of the video.',
        type: SupportedFields.TEXT,
    },
    {
        name: 'description',
        label: 'Description',
        placeholder: 'e.g. This video covers the basics of React.',
        description: 'A short summary of what the video is about.',
        type: SupportedFields.TEXTAREA,
    },
    {
        name: 'course',
        label: 'Course',
        placeholder: 'Select a course',
        description: 'The course to which this video belongs.',
        type: SupportedFields.SELECT,
        options: [
            {
                value: 'course1',
                textValue: 'Course 1',
                key: crypto.randomUUID(),
            },
            {
                value: 'course2',
                textValue: 'Course 2',
                key: crypto.randomUUID(),
            },
            {
                value: 'course3',
                textValue: 'Course 3',
                key: crypto.randomUUID(),
            }
        ]
    },
    {
        name: 'module',
        label: 'Module',
        placeholder: 'Select a module',
        description: 'The module within the course for this video.',
        type: SupportedFields.SELECT,
        options: [
            {
                value: 'module1',
                textValue: 'Module 1',
                key: crypto.randomUUID(),
            },
            {
                value: 'module2',
                textValue: 'Module 2',
                key: crypto.randomUUID(),
            },
            {
                value: 'module3',
                textValue: 'Module 3',
                key: crypto.randomUUID(),
            }
        ]
    },
    {
        name: 'file',
        label: 'Video File',
        placeholder: 'Upload video file',
        description: 'The video file to be uploaded.',
        type: SupportedFields.FILE, // This will be handled as a file input in the form
    }
]