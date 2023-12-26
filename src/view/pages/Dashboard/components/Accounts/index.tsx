import { Swiper, SwiperSlide } from "swiper/react";
import { PlusIcon } from "@radix-ui/react-icons";

import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { Spinner } from "../../../../components/Spinner";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";

import { useAccountsController } from "./useAccountsController";

import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

import "swiper/css";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toogleValuesVisibility,
    isLoading,
    accounts,
    openNewAccountModal,
  } = useAccountsController();

  return (
    <div className="w-full h-full bg-teal-900 rounded-2xl px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-10 h-10 text-teal-950/50 fill-white" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">
              Saldo total
            </span>
            <div className="flex items-center mt-2 gap-2">
              <strong
                className={cn(
                  "text-3xl text-white tracking-[-1px]",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toogleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {accounts.length === 0 && (
              <>
                <div className="mb-4" slot="container-start">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className="mt-4 h-52 border-2 border-dashed border-teal-600 rounded-2xl flex flex-col items-center justify-center gap-4 text-white"
                  onClick={openNewAccountModal}
                >
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="font-medium tracking-[-0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.15 : 1.15}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <div
                    className="flex items-center justify-between mb-4"
                    slot="container-start"
                  >
                    <strong className="text-white tracking-[-1px] text-lg">
                      Minhas contas
                    </strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  <SwiperSlide>
                    <AccountCard
                      name="Nubank"
                      color="#7950F2"
                      balance={120.23}
                      type="CHECKING"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      name="XP Investimentos"
                      color="#333"
                      balance={530.9}
                      type="INVESTMENT"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      name="Carteira"
                      color="#0f0"
                      balance={245}
                      type="CASH"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
