import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await fetch("https://book-minder-library-server.vercel.app/api/v1/category");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useCategory;
