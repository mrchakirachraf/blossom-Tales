import React from "react";
import { Link  } from "react-router-dom";



const PinkLogo = () => {

  return (
    <div>
        <Link to={`/home-page`}>
            <div className={`hidden lg:block mb-10`}>
            <img 
                src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
                alt="Cursive fonts" 
            />
            </div>
        </Link>
    </div>
  );
};

export default PinkLogo;
