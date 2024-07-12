import RootRouter from "@router/RootRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./store/context/AuthContext";


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="font-poppins">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <ToastContainer />
        <RootRouter />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
