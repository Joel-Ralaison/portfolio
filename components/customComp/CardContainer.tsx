import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ClassValue } from "clsx";

export default function CardContainer({
  className,
  children,
}: {
  className?: ClassValue;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        "rounded-md px-3 py-5 shadow-md shadow-black/10",
        className,
      )}
    >
      {children}
    </Card>
  );
}
