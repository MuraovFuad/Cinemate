import { useState, useEffect } from "react";

function useFetch(apiPath, queryTerm = "") {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=0640dd1c102955fbb1af0f400920a392&query=${queryTerm}`;

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    handleFetch();
  }, [url]);
  return { data };
}

export default useFetch;
