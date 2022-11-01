import { LocalStorage, LocalStorageKeys } from '../CommonComponentCode/Types';

// Check extended functionality in POA Core

export function updateLocalStorage(localStorage: LocalStorage): void {
  window.localStorage.setItem(localStorage.key, localStorage.value);
}

export function removeLocalStorage(key: LocalStorageKeys): void {
  window.localStorage.removeItem(key);
}
