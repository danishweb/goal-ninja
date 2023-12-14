const getLocalStorage = <T>(key: string): T | null => {
  try {
    const state = window.localStorage.getItem(key);
    if (state !== null) {
      return JSON.parse(state) as T;
    }
    return null;
  } catch (error) {
    console.error(
      `Error retrieving local storage item with key ${key}:`,
      error
    );
    return null;
  }
};

const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting local storage item with key ${key}:`, error);
  }
};

export { getLocalStorage, setLocalStorage };
