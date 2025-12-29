import { deleteData, postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job: unknown) => {
      await postData(`${import.meta.env.VITE_API_URL}/jobs`, job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobsData"] });
    },
  });
}

export function useDeleteJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId: { jobId: number }) => {
      await deleteData(`${import.meta.env.VITE_API_URL}/jobs/${jobId.jobId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobsData"] });
    },
  });
}
