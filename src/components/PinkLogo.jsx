import React from "react";
import { Link  } from "react-router-dom";
import GIF from '../assets/giphy.gif';
import flippedGIF from '../assets/output-onlinegiftools.gif';



const PinkLogo = () => {

  return (
    <div className="hidden lg:block w-full mb-5">
        <Link style={{height:'150px'}} className=" flex flex-row justify-between items-center" to={`/home-page`}>
            <div className="h-full w-36">
              <img className="w-full h-full" src={GIF} alt="" />
            </div>
            <div className={`w-3/12  hidden lg:block mb-10`}>
              <img className="w-full"
                src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
                alt="Cursive fonts" 
              />



            </div>
            <div className="h-full w-36">
              <img className="w-full h-full" src={flippedGIF} alt="" />
            </div>
        </Link>
    </div>
  );
};

export default PinkLogo;
