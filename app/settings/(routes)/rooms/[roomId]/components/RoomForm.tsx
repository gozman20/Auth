"use client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image, Room } from "@prisma/client";
import ImageUpload from "@/components/ui/imageUpload";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  price: z.string().min(1),
  bathroomCount: z.string().min(1),
  guestCount: z.string().min(1),
  // sizeId: z.string().min(1),
  // isFeatured: z.boolean().default(false).optional(),
  // isArchived: z.boolean().default(false).optional(),
});

type RoomFormValues = z.infer<typeof formSchema>;

interface RoomFormProps {
  initialData:
    | (Room & {
        images: Image[];
      })
    | null;
}
const RoomForm: React.FC<RoomFormProps> = ({ initialData }) => {
  const router = useRouter();
  const params = useParams();
  const title = initialData ? "Edit product" : "Create product";
  const description = initialData ? "Edit a product." : "Add a new product";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<RoomFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      guestCount: "",
      bathroomCount: "",
      price: "",
      images: [],
    },
  });
  const onSubmit = async (data: RoomFormValues) => {
    try {
      if (initialData) {
        await axios.patch(`/api/rooms/${params?.roomId}}`, data);
      } else {
        console.log(data);
        await axios.post(`/api/rooms`, data);
      }
      router.refresh();
      router.push(`/products`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Add title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Add description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathroomCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bathroom</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="No of bathroom"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guestCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No of guest</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Add Guest"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per night</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Add price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field?.value.map((image) => image.url)}
                    disabled={form.formState.isSubmitting}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="ml-auto"
          >
            {action}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RoomForm;
