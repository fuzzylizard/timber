import { JobColumnKey } from "@/constants";
import { deleteData, postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (application_state: unknown) => {
      await postData(
        `${import.meta.env.VITE_API_URL}/application_states`,
        application_state
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobColumnKey] });
    },
  });
}

export function useDeleteColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (columnId: { columnId: number }) => {
      await deleteData(
        `${import.meta.env.VITE_API_URL}/columns/${columnId.columnId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobColumnKey] });
    },
  });
}
