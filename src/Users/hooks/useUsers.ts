import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

const AMOUNT_OF_USERS = 5;

interface User {
  id: number;
  login: string;
  repos_url: string;
  html_url: string;
}

// TODO: common hooks logic should be moved to a single place.
//  Due to luck of time it won't be implemented at the moment
const useUsers = (name: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setError(null);
    if (!name) {
      setUsers((currentUsers) => (currentUsers.length > 0 ? [] : currentUsers));
      return;
    }
    setIsLoading(true);
    apiClient
      .get<{ items: User[] }>(
        `search/users?q=${name}&per_page=${AMOUNT_OF_USERS}&page=1`,
        { signal: controller.signal },
      )
      .then((resp) => {
        setUsers(resp.data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [name]);

  return { users, isLoading, error };
};

export default useUsers;
