import { CrossAppType } from '../CommonComponentCode/Types';

// Check extended functionality in POA Core

export function updateLocalStorage({ key, value }: CrossAppType): void {
  // todo null check
  let valueString: string;
  switch (typeof value) {
    case 'number':
      valueString = value.toString();
      break;
  }

  window.localStorage.setItem(key, valueString);
}
