export const getStorage = <T>(key: string): T | string | undefined => {
  const value = localStorage.getItem(key);
  if (!value) return;
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    return value;
  }
};

export const setStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key: string): void => {
  localStorage.removeItem(key);
};
