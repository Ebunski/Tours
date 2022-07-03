import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tours-project";

export const deleteContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  async function getTours() {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setLoading(false);
      setTours(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTours();
  }, []);

  function handleDelete(id) {
    setTours(tours.filter((x) => x.id !== id));
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <deleteContext.Provider value={handleDelete}>
        <Tours tours={tours} />
      </deleteContext.Provider>
    </main>
  );
}

export default App;
