import { useState } from "react";

import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toogleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    windowWidth,
    sliderState,
    areValuesVisible,
    setSliderState,
    toogleValuesVisibility,
    isLoading: false,
    accounts: [],
    openNewAccountModal,
  };
}
