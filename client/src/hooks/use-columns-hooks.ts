import { JobColumnKey } from "@/constants";
import { deleteData, postData } from "@/lib/fetch_utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (column: unknown) => {
      await postData("/api/v1/columns", column);
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
      await deleteData(`/api/v1/columns/${columnId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [JobColumnKey] });
    },
  });
}
