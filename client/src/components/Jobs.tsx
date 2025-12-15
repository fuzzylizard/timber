import JobsList from "@/components/JobsList.tsx";
import {useQuery} from "@tanstack/react-query";
import type {Column} from "@/types.ts";

export default function Jobs() {
    const columns: Column[] = [
        {id: 1, columnName: "Application"},
        {id: 2, columnName: "HR Interview"},
        {id: 3, columnName: "Tech Interview"}
    ];

    const {isPending, error, data} = useQuery({
        queryKey: ['jobsData'],
        queryFn: async () => {
            const response = await fetch(
                'http://127.0.0.1:3000/api/v1/jobs',
            )
            return await response.json()
        },
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log('Jobs List', data)

    if (!data) return "You have not applied for any jobs yet"

    return (
        <div className="flex flex-row gap-1">
            {columns.map(({id, columnName}: Column) => (
                <div key={id}>
                    <JobsList jobs={data} columnName={columnName}/>
                </div>
            ))}
        </div>
    )
}
