import styles from "../style";
import Button from "./Button";
import { useTranslation } from 'react-i18next';
const CTA = () =>{
  const { t, i18n } = useTranslation();
 return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-besttt rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>{t('Let’s try our service now!')}</h2>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
      {t('Thousands of satisfied users have already made our background remover their go-to tool. Join our growing community of creatives, businesses, and individuals who rely on us to elevate their visual content.')}
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);
}
export default CTA;
