"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validations";
import { Badge } from "../ui/badge";
import Image from "next/image";

const type: any = "create";

const Question = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    setIsSubmitting(true);
    try {
      // console.log(values);
      // make an async call to our api to create a question
      // that should contain all form data
      // navigate to home page
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const modules = {
    toolbar: [
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }, "link"],
      ["code-block"],
    ],
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          // to advoid addition of duplicate tags
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag); // this removes the clicked tag from array so that we can update state with new adjusted array
    form.setValue("tags", newTags);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[56px] rounded-xl border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific & imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explaination"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explaination of your problem{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <ReactQuill
                  className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[56px] rounded-xl border"
                  theme="snow"
                  placeholder="describe here"
                  modules={modules}
                  {...field}
                />
              </FormControl>

              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem & expand on what you put in the title.{" "}
                <br />
                Integrate code if needed
                <br />
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[56px] rounded-xl border"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    placeholder="Add tags..."
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag: any) => {
                        return (
                          <Badge
                            className="subtle-medium background-light800_dark300 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize text-gray-700 dark:text-light-500"
                            onClick={() => handleTagRemove(tag, field)}
                            key={tag}
                          >
                            {tag}
                            <Image
                              src={"/assets/icons/close.svg"}
                              alt="close icon"
                              height={12}
                              width={12}
                              className="cursor-pointer object-contain invert-0 dark:invert"
                            />
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add upto 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient w-fit rounded-xl  !text-light-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{type === "edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "edit" ? "Edit Question" : "Ask a Questions"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default Question;
