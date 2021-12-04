function loadLocalStorageItems(storageKey: string, defaultValue: any) {
  const data = localStorage.getItem(storageKey);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

function setLocalStorage(data: any, storageKey: string) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { loadLocalStorageItems, setLocalStorage };
