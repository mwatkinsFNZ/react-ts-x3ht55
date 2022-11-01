export type LocalStorageKeys =
  | 'breaches-reports-modal-open'
  | 'reports-page-breaches-id'
  | 'portfolio-review-buy-sell';

export type LocalStorage = {
  key: LocalStorageKeys;
  value: string;
};
