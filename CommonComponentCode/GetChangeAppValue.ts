import { CrossAppKeys, CrossAppValue } from '../CommonComponentCode/Types';

export function getCrossAppValue<T extends CrossAppKeys>(
  map: Map<CrossAppKeys, CrossAppValue<CrossAppKeys>>,
  param: T
): undefined | CrossAppValue<T> {
  // return type doesn't think undefined is going to happen - i'm hoping this is a limitation of the simulation and usages will correctly be undefinable
  if (!map.has(param)) {
    return undefined;
  }
  return map.get(param) as CrossAppValue<T>;
}
