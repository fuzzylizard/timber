import { postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job: unknown) => {
      postData(`${import.meta.env.VITE_API_URL}/jobs`, job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobsData"] });
    },
  });
}
