import * as React from "react";
import useSWR from "swr";
export default function SwrAPI() {
  const fetcher1 = (...args: any) => fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://api.publicapis.org/entries",
    fetcher1
  );
  console.log(data);

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <ul>
        {data.entries.map((item: any, num: any) => {
          return <li key={num}> {item.API}</li>;
        })}
      </ul>
    </>
  );
}
