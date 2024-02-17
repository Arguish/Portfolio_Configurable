import React from "react";

const HW = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 text-white">
      <h1 className="text-3xl">Hello World!</h1>
      <hr className="m-4" />
      <p>Boilerplate for React, Tailwind, FramerMotion, Axios & React-Router</p>
      <div className="p-4 flex items-center m-6 rounded-full ring-4 ring-slate-800 h-32">
        <img
          className="m-2 h-full w-1/4 aspect-square object-contain ring-1 ring-slate-700 rounded-full"
          src="https://logo.clearbit.com/reactjs.org"
        />
        <img
          className="m-2 h-full w-1/4 aspect-square object-contain ring-1 ring-slate-700 rounded-full"
          src="https://logo.clearbit.com/tailwindcss.com"
        />
        <img
          className="m-2 h-full w-1/4 aspect-square object-contain ring-1 ring-slate-700 rounded-full"
          src="https://logo.clearbit.com/framer.com"
        />
        <img
          className="m-2 h-full w-1/4 aspect-square object-contain ring-1 ring-slate-700 rounded-full"
          src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
        />
        <img
          className="m-2 h-full w-1/4 aspect-square object-contain ring-1 ring-slate-700 rounded-full"
          src="https://reactrouter.com/_brand/react-router-mark-color-inverted.png"
        />
      </div>
    </div>
  );
};

export default HW;
