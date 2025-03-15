export const getQuery = (
  query: Record<string, string | number | boolean | null | undefined>
): string => {
  if (!query) return "";
  const queryString = Object.keys(query)
    .filter(
      (key) =>
        query[key] !== undefined && query[key] !== null && query[key] !== ""
    )
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(query[key]))}`
    )
    .join("&");

  return queryString ? `${queryString}` : "";
};
