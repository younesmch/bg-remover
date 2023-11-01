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
const Terms = () => {
   
  const { t, i18n } = useTranslation();
  return (<>
   <Navbar></Navbar>
  <section style={{ display: 'flex', flexDirection: 'column',justifyContent:'center' }} id="features" className={layout.section}>
    <div style={{marginLeft:"25px",marginRight:"25px",marginTop:"5px"}} className={layout.sectionInfo}>
      <h2 className={styles.aboutus}>
      Terms and Conditions for Background Removal Services
      </h2>
      <p className={`${styles.aboutusparagraph} max-w-[600px] mt-5`}> </p>
    <h2 style={{fontWeight:"bold"}}>Acceptance of Terms</h2>
   <p> By accessing and using the services provided by freebgremove.com, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our services. </p>
   <h2 style={{fontWeight:"bold"}}>Description of Services</h2>
   <p> freebgremove.com offers background removal services, which may include but are not limited to:Removing backgrounds from images and photos.Providing edited images to users. </p>
   <h2 style={{fontWeight:"bold"}}>User Eligibility</h2>
   <p> You must be at least 18 years of age or have legal parental or guardian consent to use our services. By using our services, you represent and warrant that you meet these requirements. </p>
   <h2 style={{fontWeight:"bold"}}>Payment and Pricing</h2>
   <p> freebgremove.com may charge fees for the use of its services. Pricing details and payment terms can be found on the website. We reserve the right to change our pricing at any time, and such changes will be effective immediately. </p>
   <h2 style={{fontWeight:"bold"}}>User Content</h2>
   <p> You retain ownership of all content and images you upload to our website. By uploading content, you grant freebgremove.com a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content solely for the purpose of providing our services. </p>
   <h2 style={{fontWeight:"bold"}}>Limitation of Liability</h2>
   <p> freebgremove.com is not responsible for any loss or damages that may occur as a result of using our services. We do not guarantee the accuracy, completeness, or timeliness of the services. </p>
   <h2 style={{fontWeight:"bold"}}> Changes to Terms</h2>
   <p> freebgremove.com may modify these Terms and Conditions at any time. It is your responsibility to review these terms periodically. Your continued use of our services after any changes will constitute your acceptance of the revised terms. </p>
   <h2 style={{fontWeight:"bold"}}> Contact Information</h2>
   <p> If you have any questions or concerns regarding these Terms and Conditions, please contact us at. </p>
   <h2 style={{fontWeight:"bold"}}></h2>
   <p>  </p>
   <h2 style={{fontWeight:"bold"}}></h2>
   <p>  </p>
  
   
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
export default Terms;
