import styles from "../style";
import { discount, robot1, robot2, loadingGif } from "../assets";
import GetStarted from "./GetStarted";
import React, { useState, useEffect } from "react";

import { useTranslation } from 'react-i18next';

import axios from 'axios';
import './i18n';
const Hero = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(robot1);
  const [fileUrl2, setFileUrl2] = useState(robot2);
  const [showPicsOne, setShowPicsOne] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Preview');
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {



    const fetchData = async () => {
      setFileUrl2(loadingGif)
      setLoading(true)
      if (fileUrl != robot1) { setisVisible(true) }



      try {
        handleOptionChange("Result");
        const formData = new FormData();
        formData.append('image', file);
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        console.log("request sended")
        // Replace 'your-server-url' with the actual URL of your server endpoint
        const res = await axios.post('https://bg-remover-api-new.onrender.com/process', formData, {


        });
       const url = res.data.url
         console.log(url)


        setFileUrl2( url)
        setLoading(false)

        //setFileUrl(URL.createObjectURL(e.target.files[0]))
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error or display error message
      }
    }
    if (file) {
      fetchData()
    }
  }, [file]);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    togglePics()
  };

  const togglePics = () => {
    setShowPicsOne(!showPicsOne);
  };
  const handleChange = async (e) => {



    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]))


  }
  const handleDownload = () => {
    // Create an anchor element and simulate a click to trigger the download
    const a = document.createElement('a');
    a.href = fileUrl2;
    a.download = 'downloaded-image.jpg'; // Set the desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleUpload = async () => {
    setFileUrl2(loadingGif)
    setLoading(true)
    if (fileUrl != robot1) { setisVisible(true) }


    if (!file) {
      alert('Please select a file first.');
      return;
    }
    try {
      handleOptionChange("Result");
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'your-server-url' with the actual URL of your server endpoint
      const res = await axios.post('http://localhost:5000/image', formData, {


      });
      const url = res.data.url



      setFileUrl2("http://localhost:5000/" + url)
      setLoading(false)

      //setFileUrl(URL.createObjectURL(e.target.files[0]))
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error or display error message
    }
  };

  return (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-besttt rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{t('Free')}</span> {t('Pics')}{" "}
            <span className="text-white">{t('Background')}</span> {t('Removing')}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] text-white ss:leading-[100.8px] leading-[45px]">
            The Best<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Background Remover</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">

            <div style={{ marginLeft: "22px" }} className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-red-gradient p-[8px] cursor-pointer`}>
              <div className={`${styles.flexCenter} flex-col bg-purpple-gradient w-[100%] h-[100%] rounded-full`}>
                <input type="file" onChange={handleChange} id="fileInput" hidden />
                <p className="font-poppins font-medium text-[22px] leading-[23.4px]">
                  <label for="fileInput" className="text-gradient " >{t('Select your')} </label></p>
                <p className="font-poppins font-medium text-[22px] leading-[23.4px] text-gradient" >{t('pics')}</p>
              </div>
            </div>


          </div>








        </div>

        <p style={{ color: "white" ,marginBottom:"2px"}} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("Our technology is designed to provide precise and free background removal.")}
        </p>
      </div>


      {isVisible ? (
        <div style={{ marginLeft: "40px", height: "400px", marginRight: "40px", marginTop: "40px" }} className='md:w-1/2'>

          <div className="segmented-buttons">
            <button
              className={`segmented-buttonL ${selectedOption === 'Preview' ? 'active' : ''}`}
              onClick={() => handleOptionChange('Preview')}
            >
              <span className="button-text"> {t('Original')} </span>

            </button>
            <button
              className={`segmented-buttonL ${selectedOption === 'Result' ? 'active' : ''}`}
              onClick={() => handleOptionChange('Result')}
            >
              <span className="button-text">{t('Removed background ')}  </span>

            </button>
          </div>



          <div className="image-frame">
            {showPicsOne ? (
              <img src={fileUrl} alt="Pics One" className="image" />


            ) : (<div>
              {loading ? (
                <img src={loadingGif} alt="Pics One" className="image" />


              ) : (

                <img src={fileUrl2} alt="Pics Two" className="image" />


              )}</div>

              /*<img src={fileUrl2} alt="Pics Two" className="image" />*/


            )}

          </div>
          <button style={{
            position: "relative", marginLeft: "40%", marginRight: "30%", backgroundColor: "blue",
            borderRadius: "5px", height: "35px", width: "25%",marginBottom:"20px"
          }} onClick={handleDownload}> <span style={{ color: "yellow" }}> Download</span></button>
        </div>
      ) : (<></>)}




      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

       

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <div  className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-red-gradient p-[8px] cursor-pointer`}>
          <div className={`${styles.flexCenter} flex-col bg-purpple-gradient w-[100%] h-[100%] rounded-full`}>
            <input type="file" onChange={handleChange} id="fileInput" hidden />
            <p className="font-poppins font-medium text-[22px] leading-[23.4px]">
              <label for="fileInput" className="text-gradient " >Select your </label></p>
            <p className="font-poppins font-medium text-[22px] leading-[23.4px] text-gradient" >pics</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
