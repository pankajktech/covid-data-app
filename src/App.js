import React from "react";
import { useState, useEffect } from "react";
import StateData from "./Components/StateData";

const App = () => {
  const api_url = "https://api.rootnet.in/covid19-in/stats/latest";
  const [ApiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetApiData();
  }, []);

  const GetApiData = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    setApiData(data);
  };

  return (
    <div className="bg-slate-900">
      <div className="bg-slate-800 flex flex-col justify-center items-center text-white p-10 h-[60vh]">
        <video className="w-40 h-32" autoPlay loop muted>
          <source
            src={
              "https://cdn.dribbble.com/users/1027121/screenshots/10905584/media/233b66283622b482eff68f266042224c.mp4"
            }
            type="video/mp4"
          />
        </video>
        <h1 className="text-center text-5xl font-bold py-5">
          COVID-19 Data India
        </h1>
        <div className="flex">
          <h3 className="mx-4 text-xl">
            Total Confirmed Cases:
            <span className="text-teal-500 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.total}
            </span>
          </h3>
          <h3 className="mx-4 text-xl">
            Total Discharged:
            <span className="text-teal-500 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.discharged}
            </span>
          </h3>
          <h3 className="mx-4 text-xl">
            Total Deaths:
            <span className="text-teal-500 font-bold ml-2">
              {ApiData.data && ApiData.data.summary.deaths}
            </span>
          </h3>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search State"
            className="bg-gray-200 text-slate-900 rounded-md p-2 my-10 mx-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {ApiData.data &&
          ApiData.data.regional
            .filter((state) => {
              if (search === "") {
                return state;
              } else if (
                state.loc.toLowerCase().includes(search.toLowerCase())
              ) {
                return state;
              }
              return null;
            })
            .map((state) => <StateData data={state} />)}
      </div>
    </div>
  );
};

export default App;
