import { useEffect, useState } from "react";

export const useFetch = <T,>(fn: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fn();
      setData(res);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An error occurred.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, isLoading, error, reset, refetch: fetchData };
};
