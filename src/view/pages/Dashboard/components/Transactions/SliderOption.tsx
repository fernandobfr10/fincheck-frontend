import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";

interface SliderOptionProps {
  month: string;
  index: number;
  isActive: boolean;
}

export function SliderOption({ month, index, isActive }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "w-full h-12  rounded-full text-sm text-gray-800 font-medium tracking-[-0.5px]",
        isActive && "bg-white"
      )}
    >
      {month}
    </button>
  );
}
