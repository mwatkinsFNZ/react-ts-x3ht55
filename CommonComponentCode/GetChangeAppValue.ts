import { CrossAppKeys, CrossAppValue } from '../CommonComponentCode/Types';

export function getCrossAppValue<T extends CrossAppKeys>(
  map: Map<CrossAppKeys, CrossAppValue<CrossAppKeys>>,
  param: T
): CrossAppValue<T> {
  return map.get(param) as CrossAppValue<T>;
}

// todo delete below here
const map: Map<CrossAppKeys, CrossAppValue<CrossAppKeys>> = new Map();
const mappedValue = map.get('breaches-reports-breaches-id');
const getValueTest = getCrossAppValue(map, 'breaches-reports-breaches-id');
