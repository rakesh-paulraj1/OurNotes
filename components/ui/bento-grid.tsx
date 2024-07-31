import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid gap-4 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
      className
    )}
    style={{ flex: '1 0 auto' }}
  >
    {header}
    <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
      </div>
      <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
        {description}
      </div>
    </div>
  </div>
  );
};
