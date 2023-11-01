import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { useTranslation } from 'react-i18next';

const Billing = () => {
  const { t, i18n } = useTranslation();
  return(
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       {t("Easily remove your")}  <br className="sm:block hidden" /> {t("BG from pics and videos")} 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      {t("You don't need to be a Photoshop expert to achieve impeccable results. Our user-friendly interface ensures that background removal is a breeze for everyone. Just upload your image, and our intelligent algorithm will do the rest.The days of struggling with complex software are over.")}
      </p>

     
    </div>
  </section>
);}

export default Billing;
