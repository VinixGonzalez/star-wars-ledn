export const qk = {
  planets: () => ["planets"] as const,
  planet: (id: string) => ["planets", id] as const,
  usersByPlanet: (planetId: string) => ["usersByPlanet", planetId] as const,
  transactionsByUser: (userId: string) =>
    ["transactionsByUser", userId] as const,
  transactionsByUsers: (userIds: Array<string>) =>
    ["transactionsByUsers", ...userIds] as const,
  exchangeRate: () => ["exchangeRate"] as const,
};
