import { useNavigate, useParams } from "react-router-dom";
import { usePlanet } from "./hooks/usePlanet";
import { useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useTransactions } from "./hooks/useTransaction";
import { useUsersByPlanet } from "./hooks/useUsersByPlanet";
import {
  CurrencyFilter,
  TransactionSummary,
  TransactionSearch,
  TransactionTable,
  TransactionCards,
  SkeletonLoader,
  PlanetInfoSkeleton,
} from "./components";
import * as S from "./Details.styles";
import { Currency, Status } from "entities/transaction";
import { handleApiError } from "shared/utils/errorHandler";

type CurrencyFilterProps = Currency | "all";
type StatusFilterProps = Status | "all";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { planet, isLoading, error } = usePlanet(id as string);
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyFilterProps>("all");

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterProps>("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    error: usersError,
  } = useUsersByPlanet(id as string);

  const userIds = usersData?.users?.map((user) => user.id) || [];

  const {
    transactions,
    totals,
    exchangeRateData,
    error: transactionsError,
    isLoading: isLoadingTransactions,
  } = useTransactions({
    userIds,
    currencyFilter: selectedCurrency,
  });

  useEffect(() => {
    if (usersError) {
      handleApiError(usersError, "Users by Planet");
    }
    if (transactionsError) {
      handleApiError(transactionsError, "Transactions");
    }
  }, [usersError, transactionsError]);

  const processedTransactions = useMemo(() => {
    if (!transactions) return [];

    let filtered = transactions;

    if (searchTerm) {
      filtered = filtered.filter((transaction) =>
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case "id":
          aValue = a.id;
          bValue = b.id;
          break;
        case "amount":
          aValue = Math.abs(a.amount);
          bValue = Math.abs(b.amount);
          break;
        case "currency":
          aValue = a.currency;
          bValue = b.currency;
          break;
        case "status":
          aValue = a.status;
          bValue = b.status;
          break;
        case "date":
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [transactions, searchTerm, statusFilter, sortBy, sortDirection]);

  const totalPages = Math.ceil(
    processedTransactions.length / transactionsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, selectedCurrency]);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      navigate("/");
    }
  }, [error, navigate]);

  if (isLoading)
    return (
      <S.Container>
        <PlanetInfoSkeleton />
      </S.Container>
    );

  return (
    <S.Container>
      <S.Title>{planet?.name}</S.Title>
      <S.Header>
        <S.HeaderActionContainer>
          <HiChevronDoubleLeft />
          <S.LinkStyled to="/">Planet list</S.LinkStyled>
        </S.HeaderActionContainer>

        <S.HeaderActionContainer>
          <S.LinkStyled to={`/planet/${planet?.id ? +planet.id + 1 : 1}`}>
            Next planet
          </S.LinkStyled>
          <HiChevronDoubleRight />
        </S.HeaderActionContainer>
      </S.Header>

      <S.PlanetInfoContainer>
        <S.PlanetInfoGrid>
          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Climate</S.PlanetInfoLabel>
            <S.PlanetInfoValue>{planet?.climate}</S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Gravity</S.PlanetInfoLabel>
            <S.PlanetInfoValue>{planet?.gravity}</S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Terrain</S.PlanetInfoLabel>
            <S.PlanetInfoValue>{planet?.terrain}</S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Population</S.PlanetInfoLabel>
            <S.PlanetInfoValue>
              {planet?.population?.toLocaleString()}
            </S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Diameter</S.PlanetInfoLabel>
            <S.PlanetInfoValue>
              {planet?.diameter?.toLocaleString()} km
            </S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Rotation Period</S.PlanetInfoLabel>
            <S.PlanetInfoValue>
              {planet?.rotation_period} hours
            </S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Orbital Period</S.PlanetInfoLabel>
            <S.PlanetInfoValue>{planet?.orbital_period} days</S.PlanetInfoValue>
          </S.PlanetInfoItem>

          <S.PlanetInfoItem>
            <S.PlanetInfoLabel>Surface Water</S.PlanetInfoLabel>
            <S.PlanetInfoValue>{planet?.surface_water}%</S.PlanetInfoValue>
          </S.PlanetInfoItem>
        </S.PlanetInfoGrid>
      </S.PlanetInfoContainer>

      <S.PlanetTransactionsContainer>
        <CurrencyFilter
          selectedCurrency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
        />

        {(isLoadingUsers || isLoadingTransactions) && (
          <SkeletonLoader
            isLoadingUsers={isLoadingUsers}
            isLoadingTransactions={isLoadingTransactions}
          />
        )}

        {!isLoadingUsers && !isLoadingTransactions && (
          <>
            {totals && (
              <TransactionSummary
                totalTransactions={transactions?.length || 0}
                icsCount={totals.ics.count}
                gcsCount={totals.gcs.count}
                icsTotal={totals.ics.total}
                gcsTotal={totals.gcs.total}
              />
            )}

            {exchangeRateData && (
              <S.ExchangeRateInfo>
                <h4>Exchange Rate</h4>
                <p>1 ICS = {exchangeRateData.rate} GCS</p>
              </S.ExchangeRateInfo>
            )}

            <TransactionSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
            />

            {processedTransactions.length > 0 ? (
              <S.TransactionDisplayWrapper>
                <S.DesktopOnly>
                  <TransactionTable
                    transactions={processedTransactions}
                    currentPage={currentPage}
                    transactionsPerPage={transactionsPerPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                </S.DesktopOnly>
                <S.MobileOnly>
                  <TransactionCards
                    transactions={processedTransactions}
                    currentPage={currentPage}
                    transactionsPerPage={transactionsPerPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </S.MobileOnly>
              </S.TransactionDisplayWrapper>
            ) : (
              <S.NoTransactionsMessage>
                {transactions?.length === 0 ? (
                  <p>No transactions found for this planet.</p>
                ) : (
                  <div>
                    <p>
                      {searchTerm || statusFilter !== "all"
                        ? `No transactions match your current filters.`
                        : "No transactions available."}
                    </p>
                    {(searchTerm || statusFilter !== "all") && (
                      <S.ClearFiltersButton
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("all");
                          setCurrentPage(1);
                        }}
                      >
                        Clear All Filters
                      </S.ClearFiltersButton>
                    )}
                  </div>
                )}
              </S.NoTransactionsMessage>
            )}
          </>
        )}
      </S.PlanetTransactionsContainer>
    </S.Container>
  );
};

export default Detail;
