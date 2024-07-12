import RootRouter from "@router/RootRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="font-poppins">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RootRouter />
      </QueryClientProvider>
    </div>
  )
}

export default App
