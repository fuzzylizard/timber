import { JobsDataKey } from "@/constants";
import { deleteData, postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job: unknown) => {
      await postData("/v1/jobs", job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobsDataKey] });
    },
  });
}

export function useDeleteJobMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId: { jobId: number }) => {
      await deleteData(`/v1/jobs/${jobId.jobId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobsDataKey] });
    },
  });
}
