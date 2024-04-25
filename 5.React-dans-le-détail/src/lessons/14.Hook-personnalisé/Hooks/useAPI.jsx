import React from "react";
import { useState, useEffect } from "react";

export default function useAPI() {
  // 1.State :
  const [catData, setCatData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // 2.Behavior:
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCatData(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  // 3.Render:
  return { catData, error, loading };
}
