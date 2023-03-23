import React from "react";
import { useState, useEffect } from "react";

export default function FetchAPI() {
  const [data, setData] = useState([]);
  //Using fetch api and promise channing

  // useEffect(() => {
  //   fetch('https://api.publicapis.org/entries')
  //     .then((data)  => data.json())
  //     .then((item) => console.log(item));
  // }, []);

  //using async await

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.publicapis.org/entries");
      const result = await response.json();
      setData(() => result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
