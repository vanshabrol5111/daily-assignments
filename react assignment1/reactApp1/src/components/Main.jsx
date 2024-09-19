import React from "react";
import image from "../assets/vr.jpg";
import Button from "./Button";
const Main = () => {
  return (
    <>
      <div className="flex w-svw h-svh mt-32 ">
        <img src={image} className=" w-1/2 h-2/3 ml-20 rounded-tl-3xl  rounded-br-3xl"></img>
<div className="mr-5">
        <div className="ml-20 mx-auto border 4px h-2/3 rounded-3xl bg-red-100 mr-20">
          <h1 className="text-2xl ml-2">
            Mudo 40MM HD Lens VR Headset Glasses with Built-in Headphones (Smart
            Glasses, Black)
          </h1>
          <p className="text-xl ml-2"> price ₹2,249</p>
          <h2 className="ml-2 text-2xl">Description:</h2>
          <p className="ml-2">
            Brand :- Mudo
            <br /> Brand color :- Black <br /> Model Name :- 40MM HD Lens VR
            Headset Glasses with Built-in Headphones
            <br />
            Function :- Graphical Display
          </p>
          <br />
          <div className="ml-2 w-80 h-38 rounded-md ">
            <div className="">
              <input type="radio" name="Exchangeoffer" id="radio1"></input>
              <label htmlFor="radio1">Buy without Exchange₹2,249</label>
            </div>

            <div>
              <input type="radio" name="Exchangeoffer" id="radio2"></input>
              <label htmlFor="radio2">Buy with Exchange up to ₹200 off</label>
            </div>
          </div>
          <br />
          <br />
          <div className="flex">
            <Button buttonText={`Add to Cart`} buttonColor={`bg-yellow-500`} />
            <Button buttonText={`Buy  now`} buttonColor={`bg-orange-500`} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Main;
