import { Currency } from "entities/transaction";
import { FilterButton, FilterContainer } from "./CurrencyFilter.styles";

interface CurrencyFilterProps {
  selectedCurrency: Currency | "all";
  onCurrencyChange: (currency: Currency | "all") => void;
}

export const CurrencyFilter: React.FC<CurrencyFilterProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <FilterContainer>
      <FilterButton
        $isActive={selectedCurrency === "all"}
        onClick={() => onCurrencyChange("all")}
      >
        All Currencies
      </FilterButton>
      <FilterButton
        $isActive={selectedCurrency === "ICS"}
        onClick={() => onCurrencyChange("ICS")}
      >
        ICS (Imperial Crown Standard)
      </FilterButton>
      <FilterButton
        $isActive={selectedCurrency === "GCS"}
        onClick={() => onCurrencyChange("GCS")}
      >
        GCS (Galactic Credit Standard)
      </FilterButton>
    </FilterContainer>
  );
};
