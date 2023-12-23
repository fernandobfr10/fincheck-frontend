import { useState } from "react";

import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(true);

  const { areValuesVisible } = useDashboard();

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
