import { type ReactNode } from "react";

interface QuestionProps {
  title: string;
  description?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const Question: React.FC<QuestionProps> = ({
  title,
  description,
  required = false,
  children,
}) => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <div className="px-10 text-start">
        <div className="max-w-3xl mx-auto w-full mt-8 mb-12">
          <div className="cursor-default">
            <p className="text-2xl leading-8">
              {title}
              {required ? '*' : null}
            </p>
          </div>
          {description ? (
            <div className="text-xl leading-7 text-black/70 mt-2">
              <p>{description}</p>
            </div>
          ) : null}
          <div className={`mt-8`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};