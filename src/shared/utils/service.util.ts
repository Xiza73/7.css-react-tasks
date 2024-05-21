const cleanObject = (obj: { [key: string]: any }) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (obj[key] !== undefined) acc[key] = obj[key];

      return acc;
    },
    {} as { [key: string]: any }
  );
};

export const buildWithQueryParams = (url: string, params: { [key: string]: any }) => {
  const cleanedParams = cleanObject(params);

  if (Object.keys(cleanedParams).length === 0) return url;

  const urlParams = new URLSearchParams(cleanedParams);

  return `${url}?${urlParams.toString()}`;
};

export const initialPagination = {
  page: 1,
  limit: 10,
};
