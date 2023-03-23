import * as React from "react";
import { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface website {
  API: string;
  Auth: boolean;
  Category: string;
  Cors: boolean;
  Description: string;
  HTTPS: boolean;
  Link: string;
}
type response = {
  entries: website[];
};

const AxiosAPI: FC = () => {
  const [bigData, setData] = useState<website[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get<response>(
        "https://api.publicapis.org/entries"
      );
      setData(() => data.entries);
      console.log("data total0", data.entries);
    };
    getData();
  }, []);

  return (
    <>
      <ul>
        {bigData.map((item: website, i: number) => {
          return <li key={i}>{item.API}</li>;
        })}
      </ul>
    </>
  );
};

export default AxiosAPI;
