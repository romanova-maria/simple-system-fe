import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Repository {
  stargazers_count: number;
  name: string;
  description: string | null;
  html_url: string;
}

// TODO: common hooks logic should be moved to a single place.
//  Due to luck of time it won't be implemented at the moment
const useRepositories = (login: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);
    setIsLoading(true);
    apiClient
      .get<Repository[]>(`users/${login}/repos`, { signal: controller.signal })
      .then((res) => {
        setRepositories(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.error(error.message);
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [login]);

  return { repositories, isLoading, error };
};

export default useRepositories;
