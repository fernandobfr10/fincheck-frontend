import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
}

export function Modal({ open, children, title, rightAction }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            "data-[state=open]:animate-overlay-show"
          )}
        />
        <Dialog.Content
          className={cn(
            `w-full max-w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6
              bg-white space-y-10 rounded-2xl z-[51] shadow-[0px_11px_20px_0px__rgba(0,0,0,0.1)] outline-none`,
            "data-[state=open]:animate-content-show"
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button className="w-12 h-12 flex items-center justify-center">
              <Cross2Icon className="w-4 h-4" />
            </button>
            <span className="text-lg font-bold tracking-[-1px]">{title}</span>
            <div className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </div>
          </header>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
