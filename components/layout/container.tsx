import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className,
  as = "div",
}: ContainerProps) {
  const Element = as;
  return (
    <Element className={cn("container-site", className)}>{children}</Element>
  );
}
