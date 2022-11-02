export type PassedDownData = {
  path: Path;
  params: Map<ChangeAppCrossAppType['key'], string>;
};

export type Path = BreachesPaths | PortfolioReviewPaths;
export type BreachesPaths = 'overview' | 'reportsPage' | 'breachSummary';
export type PortfolioReviewPaths = 'ReviewOnly' | 'buySellMode' | 'orders';

/**
 * ChangeApp design:
 * key: used as the LocalStorage key
 * value: will be stringified
 * CrossApp: signifies that the value should be passed in from the source code
 */
export type ChangeAppKeys = ChangeAppType['key'];
export type ChangeAppCrossAppType = Omit<
  Extract<ChangeAppType, { CrossApp? }>,
  'CrossApp'
>;
export type ChangeAppType =
  | BreachesReportsBreachId
  | BreachesReportsModalOpen
  | BreachesUrl
  | PortfolioBuySell;
export type BreachesReportsBreachId = {
  key: 'breaches-reports-breaches-id';
  value: number;
  CrossApp?;
};
export type BreachesReportsModalOpen = {
  key: 'breaches-reports-modal-open';
  value: boolean;
};
export type BreachesUrl = {
  key: 'breaches-url';
  value: string;
};
export type PortfolioBuySell = {
  key: 'portfolio-review-buy-sell';
  value: boolean;
};
