import styles from "../style";
import { Rm, R1, R2, Bg } from "../assets";
import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const scrollToTop = () => {
    window.scrollTo(0, 0)
}

import axios from 'axios';
import './i18n';
import Business from "./Business";
import Whowearepage from "./whowearepage";
const WhoWeAre = () => {

    const { t, i18n } = useTranslation();

    const relatedPosts = [
        {
            title: "Related Post 1",
            date: "October 21, 2023",
            imageSrc: { Rm }
        },
        {
            title: "Related Post 2",
            date: "October 22, 2023",
            imageSrc: "related_post_image_2.jpg",
        },
    ];

    return (<div >
        <div><Navbar className="w-full flex py-6 justify-between items-center navbar" ></Navbar></div>
        <div className={`${styles.boxWidth}`}>

            <Whowearepage></Whowearepage>
        </div>





        <div className="clear">
            <Footer></Footer></div>
    </div>);
};

export default WhoWeAre;
