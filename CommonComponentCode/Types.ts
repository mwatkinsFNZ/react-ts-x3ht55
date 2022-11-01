export type LocalStorageKeys = BreachesKeys | PortfoliosKeys;

export type LocalStorage = {
  key: LocalStorageKeys;
  value: string;
};

export type BreachesKeys =
  | 'breaches-reports-modal-open'
  | 'breaches_reports-breaches-id';

export type PortfoliosKeys = 'portfolio-review-buy-sell';
