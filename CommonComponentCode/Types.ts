export type ChangeAppType = (to: string, path: Path, params?: Params) => void;
export type PassedDownData = {
  path: Path;
  params: Params;
};

export type Params = Map<CrossAppKeys, CrossAppValue<CrossAppKeys>>;
export type Path = BreachesPaths | PortfolioReviewPaths;
export type BreachesPaths = 'overview' | 'reportsPage' | 'breachSummary';
export type PortfolioReviewPaths = 'ReviewOnly' | 'buySellMode' | 'orders';

/**
 * Variables to be shared between apps when navigating
 * key format: app_childApp_childApp_..._name
 * value: type of data being shared
 */
export type CrossAppKeys = CrossAppType['key'];
export type CrossAppValue<T extends CrossAppType['key']> = Extract<
  CrossAppType,
  { key: T }
>['value'];
export type CrossAppType = BreachesReportsBreachId | Test;
export type BreachesReportsBreachId = {
  key: 'breaches-reports-breaches-id';
  value: number;
};
export type Test = {
  key: 'test';
  value: boolean;
};
