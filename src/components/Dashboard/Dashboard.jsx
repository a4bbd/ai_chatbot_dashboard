import React from "react";


const Dashboard = () => {
  return (
    <div>
    <div className="grid grid-cols-12  grid-rows-6 h-[600px]">
      <h1 className="bg-zinc-500  col-start-3 border  border-neutral-900 col-end-13">Element 1</h1>
      <h1 className="bg-red-700 row-start-2 row-end-5 border  border-neutral-900 col-start-1 col-end-3">Element 2</h1>
      <h1 className="bg-orange-800 row-start-1 row-end-2 border  border-neutral-900 col-start-1 col-end-3">Element 3</h1>
      <h1 className="bg-yellow-700 col-start-3 col-end-13 border  border-neutral-900 row-start-2 row-end-4">Element 4</h1>
      <h1 className="bg-lime-800 col-start-3 border  border-neutral-900 col-end-13">Element 5</h1>
    </div>
    </div>

  );
};

export default Dashboard;
