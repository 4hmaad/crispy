import { Question } from "./question";

interface TextQuestionProps {
  title: string;
  description?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextQuestion: React.FC<TextQuestionProps> = ({
  title,
  description,
  required,
  maxLength,
  placeholder = "Type your answer here...",
  value,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Handle form submission
    }
  };

  return (
    <Question
      title={title}
      description={description}
      required={required}
    >
      <input
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full border-none outline-none text-[#0142AC] pb-2 text-3xl bg-transparent placeholder:text-[#0142AC]/30 transition-shadow duration-100 ease-out shadow-[0_1px_rgba(1,66,172,0.3)] focus:shadow-[0_2px_rgba(1,66,172,1)]"
      />
      <div className="mt-4 flex items-center gap-3 max-[600px]:fixed max-[600px]:z-10 max-[600px]:left-0 max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:px-4">
        <button className="font-bold cursor-pointer bg-[#0142AC] text-white outline-none shadow-[0_3px_12px_0_rgba(0,0,0,0.1)] px-[14px] rounded h-10 text-xl transition-colors duration-100 hover:bg-[#275EB8] max-[600px]:w-full">
          OK
        </button>
        <p className="text-xs leading-4 hidden lg:block">
          press <strong className="tracking-[0.2px]">Enter ↵</strong>
        </p>
      </div>
    </Question>
  );
};