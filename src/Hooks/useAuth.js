import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const { data, refetch } = useQuery(
    "Users",
    async () =>
      await fetch(`http://localhost:5000/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  console.log(data);
  useEffect(() => {
    if (data) {
      setAuth(true);
      setUser(data?.name);
    } else {
      setAuth(false);
    }
  }, [data]);

  return { auth, refetch, user };
};

export default useAuth;
