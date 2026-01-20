import { JobColumnKey } from "@/constants";
import { deleteData, postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (application_state: unknown) => {
      await postData("/api/v1/application_states", application_state);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobColumnKey] });
    },
  });
}

export function useDeleteColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (columnId: number) => {
      await deleteData(`/api/v1/application_states/${columnId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobColumnKey] });
    },
  });
}
