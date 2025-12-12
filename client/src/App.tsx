import './App.css'
import {Button} from "@/components/ui/button.tsx";
import Header from "@/components/Header.tsx";

function App() {

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <Header />
        <Button variant="outline">Click me</Button>
      </div>
    </>
  )
}

export default App
