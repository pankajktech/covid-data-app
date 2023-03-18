import React from "react";

const StateData = (props) => {
  return (
    <div className="bg-white backdrop-blur-md flex items-center flex-col m-10 w-96 shadow-md shadow-teal-500 h-64 hover:bg-teal-50 hover:scale-105 duration-300 cursor-pointer">
      <h2 className="font-bold text-teal-800 mt-5 mb-8 text-2xl ">
        {props.data.loc}
      </h2>
      <h3 className="font-mono my-3">
        Confirmed Cases:
        <span className="font-bold text-slate-900 mx-2 ">
          {props.data.totalConfirmed}
        </span>
      </h3>
      <h3 className="font-mono my-3">
        Discharged:
        <span className="font-bold text-slate-900 mx-2 ">
          {props.data.discharged}
        </span>
      </h3>
      <h3 className="font-mono my-3">
        Total Deaths:
        <span className="font-bold text-slate-900 mx-2 ">
          {props.data.deaths}
        </span>
      </h3>
    </div>
  );
};

export default StateData;
