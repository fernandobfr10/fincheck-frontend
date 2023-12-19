import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";

import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { useDashboard } from "../DashboardContext/useDashboard";
import { cn } from "../../../../../app/utils/cn";

interface AccountCardProps {
  name: string;
  color: string;
  balance: number;
  type: "CHECKING" | "INVESTMENT" | "CASH";
}

export function AccountCard({ name, color, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="h-[200px] p-4 bg-white rounded-2xl flex flex-col justify-between border-b-4 border-transparent"
      style={{ borderColor: color }}
    >
      <div className="flex flex-col gap-2">
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px]">
          {name}
        </span>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "text-gray-800 font-medium tracking-[-0.5px]",
            !areValuesVisible && "blur-sm"
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
