import './App.css'
import Header from "@/components/Header.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import JobBoard from "@/components/JobBoard.tsx";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen flex-col">
                <Header/>
                <JobBoard />
            </div>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App
