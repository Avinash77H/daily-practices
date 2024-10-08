
import "./App.css";
import Demo from "./Components/Demo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div>
    <Demo/>
    <ToastContainer />
  </div>;
}

export default App;
