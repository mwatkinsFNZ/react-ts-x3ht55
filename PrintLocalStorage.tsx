import * as React from 'react';

export function PrintLocalStorage() {
  const storageItems = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const storage = window.localStorage[key];
    storageItems.push(
      <p key={i}>
        {key}: {storage}
      </p>
    );
  }

  return <div>{storageItems}</div>;
}
