export type LocalStorage = {
  key: LocalStorageKeys;
  value: string;
};

export type LocalStorageKeys =
  | LocalStorageKeysRequiringInput
  | BreachesKeys
  | PortfoliosKeys;

export type BreachesKeys = 'breaches-reports-modal-open';
export type PortfoliosKeys = 'portfolio-review-buy-sell';

export type LocalStorageKeysRequiringInput = BreachesKeysRequiringValues;
export type BreachesKeysRequiringValues = 'breaches_reports-breaches-id';

export type NewLocalStorage = {
  path: Path;
  params: Map<LocalStorageKeysRequiringInput, string>;
};

export type Path = BreachesPaths | PortfolioReviewPaths;
export type BreachesPaths = 'overview' | 'reportsPage' | 'breachSummary';
export type PortfolioReviewPaths = 'ReviewOnly' | 'buySellMode';
