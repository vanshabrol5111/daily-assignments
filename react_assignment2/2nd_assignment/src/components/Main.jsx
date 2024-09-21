import React, { useState } from "react";
import Button from "./Button";
import { data } from "../dummydata/data";

const main = () => {
  const [searchResult, setSearchResult] = useState("");
  const [userdata, setuserdata] = useState(null);
  const handlesearch = () => {
    const user = data.find((user) => user.id === searchResult);
    if (!user) {
        alert("not found");
      }
      setuserdata(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handlesearch(); // Call the search function
  };
  
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-10  flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              
              className="w-52 border-2 outline-zinc-500 text-center rounded-md"
              placeholder="Enter ID"
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
             
              id="id"
              max={5}
              min={1}
            />

            <Button/>
          </form>
        </div>
        {userdata && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg w-96">
            {typeof userDetails === "string" ? (
              <p className="text-red-500">{userdata}</p>
            ) : (
              <div>
                <p>Name:{userdata.name}</p>
                <p>Email: {userdata.email}</p>
                <p>Contact: {userdata.contactNumber}</p>
                <p>Age: {userdata.age}</p>
              </div>
            )}
             
          </div>
        )}
      </div>
    </>
  );
};

export default main;
/* {
    searchResult && <SearchResult searchResult={searchResult}></SearchResult>

  } */
