import { ChangeAppKeys, ChangeAppType } from '../CommonComponentCode/Types';

// Check extended functionality in POA Core

export function updateLocalStorage({ key, value }: ChangeAppType): void {
  let valueString: string;
  switch (typeof value) {
    case 'string':
      valueString = value;
    case 'number':
      valueString = value.toString();
      break;
    case 'boolean':
      valueString = value.toString();
      break;
    case 'object':
      valueString = JSON.stringify(value);
      break;
  }

  window.localStorage.setItem(key, valueString);
}

export function removeLocalStorage(key: ChangeAppKeys): void {
  window.localStorage.removeItem(key);
}
