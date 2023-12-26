import * as RdxPopover from "@radix-ui/react-popover";

import { cn } from "../../app/utils/cn";

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Root>{children}</RdxPopover.Root>;
}

function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Trigger asChild>{children}</RdxPopover.Trigger>;
}

function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          "p-4 rounded-2xl bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[99]",
          "data-[side=bottom]:animate-slide-up-and-fade data-[side=bottom]:mt-2",
          "data-[side=top]:animate-slide-down-and-fade data-[side=top]:mb-2",
          className
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
