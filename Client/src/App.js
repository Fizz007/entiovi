import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Sample from "./components/Sample";
import { baseUrl } from "./components/Util";

function App() {
  const [backenddata, setBackendData] = useState([]);
  
  useEffect(() => {
      axios.get(`${baseUrl}/data`)
      .then((response) => {
       
        setBackendData(response.data.data);
      })      
      .catch((err) => console.log("error", err));
  }, []);
  return (
    <div className="App">
      
        {backenddata.length > 0 && <Sample data={backenddata}/>}  

       
    </div>
  );
}

export default App;
