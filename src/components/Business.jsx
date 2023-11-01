import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
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
const Business = () => {
  const { t, i18n } = useTranslation();
  return (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      {t('Perfect AI Model')} <br className="sm:block hidden" />  {t('for background removing.')}
      </h2>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
      {t('cc')}      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);
}
export default Business;
