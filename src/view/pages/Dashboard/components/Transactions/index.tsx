import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { Spinner } from "../../../../components/Spinner";

import { MONTHS } from "../../../../../app/config/constants";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

import { useTransactionsController } from "./useTransactionsController";

import emptyStateIllustration from "../../../../../assets/empty-state.svg";

export function Transactions() {
  const { areValuesVisible, isInitialLoading, isLoading, transactions } =
    useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="w-full h-full bg-gray-100 rounded-2xl p-10 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <header>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2">
                <TransactionsIcon />
                <span className="text-sm text-gray-800 font-medium tracking-[-0.5px]">
                  Transações
                </span>
                <ChevronDownIcon className="text-gray-900" />
              </button>

              <button>
                <FilterIcon />
              </button>
            </div>

            <div className="relative mt-6">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        month={month}
                        isActive={isActive}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <section className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  src={emptyStateIllustration}
                  alt="Illustração de empty state"
                />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação.
                </p>
              </div>
            )}

            {hasTransactions && !isLoading && (
              <>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="expense" />
                    <div>
                      <span className="block font-bold tracking-[-0.5px]">
                        Almoço
                      </span>
                      <span className="text-sm text-gray-600">04/06/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-red-800 tracking-[0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    - {formatCurrency(1226)}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="income" />
                    <div>
                      <span className="block font-bold tracking-[-0.5px]">
                        Salário
                      </span>
                      <span className="text-sm text-gray-600">04/06/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-green-800 tracking-[0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(1226)}
                  </span>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
}
