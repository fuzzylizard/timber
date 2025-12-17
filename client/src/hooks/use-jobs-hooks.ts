import { postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job: unknown) => {
      postData("http://127.0.0.1:3000/api/v1/jobs", job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobsData"] });
    },
  });
}
