import { CrossAppKeys, CrossAppValue } from '../CommonComponentCode/Types';

export function getCrossAppValue<T extends CrossAppKeys>(
  map: Map<CrossAppKeys, CrossAppValue<CrossAppKeys>>,
  param: T
): CrossAppValue<T> {
  return map.get(param) as CrossAppValue<T>;
}
