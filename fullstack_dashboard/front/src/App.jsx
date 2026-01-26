import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {

 const [data, setData] = useState([]);
  
 
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/visitors");
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
              <h2>{datum.loyal_customer}</h2>
              <p>{datum.month}</p>
              <p>{datum.new_customer}</p>
              <p>{datum.create_date}</p>
              <p>{datum.update_date}</p>
            </div>
          ))
        }
      </div>
    </>
 )
}

export default App
