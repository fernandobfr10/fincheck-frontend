import { Modal } from "../../../../components/Modal";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Select } from "../../../../components/Select";

import { useNewTransactionModalController } from "./useNewTransactionModalController";
import { DatePickerInput } from "../../../../components/DatePickerInput";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransacionType,
  } = useNewTransactionModalController();

  const isExpense = newTransacionType === "EXPENSE";

  return (
    <Modal
      title={isExpense ? "Nova Despesa" : "Nova Receita"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            {isExpense ? "Valor da Despesa" : "Valor da Receita"}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}
          />
          <Select
            placeholder="Categoria"
            options={[
              {
                value: "CHECKING",
                label: "Conta Corrente",
              },
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },
              {
                value: "CASH",
                label: "Dinheiro Físico",
              },
            ]}
          />
          <Select
            placeholder={isExpense ? "Pagar com" : "Receber com"}
            options={[
              {
                value: "CHECKING",
                label: "Conta Corrente",
              },
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },
              {
                value: "CASH",
                label: "Dinheiro Físico",
              },
            ]}
          />
          <DatePickerInput />
        </div>
      </form>
    </Modal>
  );
}
