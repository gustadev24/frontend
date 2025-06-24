import { Form, FormField } from "@/modules/core/ui/form";
import { useForm } from "react-hook-form";
import { videoFormFields, videosFormSchema } from "../lib/videosForm";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InferItem } from "@/modules/core/ui/inferField";
import { Button } from "@/modules/core/ui/button";

function VideosForm() {
    const form = useForm<z.infer<typeof videosFormSchema>>({
        resolver: zodResolver(videosFormSchema),
        defaultValues: {
            title: '',
            description: '',
            course: '',
            module: '',
            file: undefined,
        },
    });

    const onSubmit = (values: z.infer<typeof videosFormSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >
                {videoFormFields.map((field) => (
                    <FormField
                        key={`form-videos-${field.name}`}
                        control={form.control}
                        name={field.name}
                        render={({ field: formField }) => (
                            <InferItem {...field} {...formField} />
                        )}
                    />
                ))}
                <Button type="submit" className="self-center">
                    Save Video
                </Button>
            </form>
        </Form>
    );
}

export { VideosForm };