export const getItem = <T = unknown>(key: string): T | null => {
  const value = window.localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const setItem = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};
