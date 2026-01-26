import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {

 const [data, setData] = useState([]);
  
 
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/users");
      //console.log(response);
      setData(response.data);
    };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
      <h2>Data From Server</h2>
      <div>
        {
          data.map((datum, idx) => (
            <div key={idx}>
              <h2>{datum.username}</h2>
              <p>{datum.email}</p>
            </div>
          ))
        }
      </div>
    </>
 )
}

export default App
