import React, { useState, forwardRef } from "react";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import { Strong, Text } from "../ui/text";
import * as Headless from "@headlessui/react";
import clsx from "clsx";

const TextQuestion = ({ question }) => {
  const [answer, setAnswer] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          <Heading
            className="sm:font-normal sm:text-2xl text-gray-800"
            level={2}
          >
            {question.title}
          </Heading>
          <Text className="sm:text-xl text-gray-600">
            {question.properties?.description}
          </Text>
        </div>
        <div className="space-y-6">
          <Textarea
            value={answer}
            onChange={handleInputChange}
            placeholder={
              question.properties?.placeholder || "Type your answer..."
            }
            rows={1}
          />
          <div className="flex items-center my-6">
            <Button>Okay</Button>
            <Text className="sm:text-sm ml-4">
              Press <Strong>Enter</Strong> ↵
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export const Textarea = forwardRef(function Textarea(
  {
    className,
    resizable = true,
    ...props
  }: { className?: string; resizable?: boolean } & Omit<
    Headless.TextareaProps,
    "as" | "className"
  >,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div
      data-slot="control"
      className={clsx([
        className,
        "relative block w-full",
        // Focus ring and border at the bottom only
        "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-transparent after:transition-transform after:scale-x-0 after:origin-left sm:focus-within:after:scale-x-100 sm:focus-within:after:bg-black",
        ,
        // Disabled state styles
        "has-[[data-disabled]]:opacity-50",
      ])}
    >
      <Headless.Textarea
        ref={ref}
        {...props}
        className={clsx([
          // Typography for large text input
          "block w-full appearance-none text-2xl text-zinc-950 placeholder:text-zinc-500 dark:text-white sm:text-xl",
          // Background color
          "bg-transparent",
          // Border at the bottom only
          "border-b border-zinc-950/10 dark:border-white/10 focus:border-black focus:outline-none",
          // Padding
          "py-3 px-0",
          // Resizable (optional)
          resizable ? "resize-y" : "resize-none",
        ])}
      />
    </div>
  );
});

export default TextQuestion;
