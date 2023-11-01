import Navbar from "./Navbar";
import { AboutUsfeatures, features } from "../constants";
import styles, { layout } from "../style";
import { Link } from 'react-router-dom';



import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon, title, content, index }) =>{
  const { t, i18n } = useTranslation();
  return (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gray text-[18px] leading-[23.4px] mb-1">
        {t(title)}
      </h4>
      <p className="font-poppins font-normal text-gray text-[16px] leading-[24px]">
        {t(content)}
      </p>
    </div>
  </div>
);
}
const Privacy = () => {
   
  const { t, i18n } = useTranslation();
  return (<>
   <Navbar></Navbar>
  <section style={{ display: 'flex', flexDirection: 'column',justifyContent:'center' }} id="features" className={layout.section}>
    <div style={{marginLeft:"25px",marginRight:"25px",marginTop:"5px"}} className={layout.sectionInfo}>
      <h2 className={styles.aboutus}>
      Privacy
      </h2>
      <p className={`${styles.aboutusparagraph} max-w-[600px] mt-5`}> </p>
    <h2 style={{fontWeight:"bold"}}> No Data Collection</h2>
   <p>We do not collect any personal information or data from visitors to our website. You can browse our website anonymously without providing any personal details.</p>
   <h2 style={{fontWeight:"bold"}}> Use of Cookies</h2>
   <p> We may use cookies and similar technologies solely for the purpose of enhancing your browsing experience. These cookies do not contain personal information and are not used for tracking or identifying individual users. </p>
   <h2 style={{fontWeight:"bold"}}> Third-Party Links</h2>
   <p>  Our website may contain links to third-party websites. We are not responsible for their privacy practices, so please review their policies.</p>
   <h2 style={{fontWeight:"bold"}}>Changes to This Privacy Policy</h2>
   <p> We may update this privacy policy to reflect changes in our practices and services. We will post the updated policy on our website, and the date of the last revision will be mentioned. </p>
  
 
   <h2 style={{fontWeight:"bold"}}>Contact Us</h2>
   <p> If you have any questions or concerns regarding this privacy policy, please contact us </p>
  
   
    </div>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px]  `}>
        <Link to="/" style={{ color: "white" }}>
            go back home
        </Link>
    </button></div>
  </section></>
  
);

}
export default Privacy;
