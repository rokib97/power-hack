import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const { data, isLoading, refetch } = useQuery(
    "User",
    async () =>
      await fetch(`https://bearded-goose-44851.herokuapp.com/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  console.log(data);
  useEffect(() => {
    if (data) {
      setAuth(true);
      setUser(data?.email);
    } else {
      setAuth(false);
    }
  }, [data]);

  return { auth, refetch, user, isLoading };
};

export default useAuth;
