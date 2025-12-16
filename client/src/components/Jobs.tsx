import JobsList from "@/components/JobsList.tsx";
import {useQuery} from "@tanstack/react-query";
import type {Job} from "@/types.ts";

export default function Jobs() {
  const {isPending, error, data} = useQuery<Job[]>({
    queryKey: ['jobsData'],
    queryFn: async () => {
      const response = await fetch(
        'http://127.0.0.1:3000/api/v1/jobs',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) {
    console.error(error)
    return 'An error has occurred: ' + error.message
  }

  if (!data) return "You have not applied for any jobs yet"

  return (
    <JobsList jobs={data} />
  )
}
