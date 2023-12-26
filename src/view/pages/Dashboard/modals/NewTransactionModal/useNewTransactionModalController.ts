import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransacionType,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransacionType,
  };
}
