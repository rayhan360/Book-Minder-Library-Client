import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/api/v1/category", {
        credentials: "include",
      });
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useCategory;
