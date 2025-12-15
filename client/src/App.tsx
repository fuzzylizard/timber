import './App.css'
import Header from "@/components/Header.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Jobs from "@/components/Jobs.tsx";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen flex-col">
                <Header/>
                <Jobs />
            </div>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default App
