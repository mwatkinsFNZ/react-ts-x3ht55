import { LocalStorage } from '../CommonComponentCode/Types';

export function updateLocalStorage(localStorage: LocalStorage): void {
  // Extract full function from POA Core

  window.localStorage.setItem(localStorage.key, localStorage.value);
}
