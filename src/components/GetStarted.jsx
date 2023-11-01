import styles from "../style";
import { arrowUp } from "../assets";
import React, { useState } from "react";
const GetStarted = () => {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-blue-gradient p-[8px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-purpple-gradient w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>

          <p className="font-poppins font-medium text-[22px] leading-[23.4px]">

            <span className="text-gradient ">Upload </span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        

        <p className="font-poppins font-medium text-[22px] leading-[23.4px]">
          <span className="text-gradient">Your Picture</span>
        </p>
      </div>
    </div>
  );
};
export default GetStarted;
