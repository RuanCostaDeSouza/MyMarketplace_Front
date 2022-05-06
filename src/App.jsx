import { AuthProvider }  from "./hooks/Auth";
import { ToastContainer} from "react-toastify";
import AllRoutes         from "./routes";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AllRoutes/>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        />
      </AuthProvider>
    </>
  )
}