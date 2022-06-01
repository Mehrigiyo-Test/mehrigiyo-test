import React from 'react';
import styles from './Setting.module.scss';
import Title from '../../components/Title/Title';
import ModeIcon from '../../icons/Mode.svg';
import Language from '../../icons/Language.svg';
import SmallArrow from '../../icons/SmallArrow.svg';

const Setting = () => {

  const data = [
    {
      img: Language,
      title: 'Language',
      subtitle: 'O’zbek',
    },
    {
      img: ModeIcon,
      title: 'Theme mode',
      subtitle: 'Light'
    }
  ]

  return (
    <div className={styles.container}>
      <Title title={"Settings"} subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."} />

      <div className={styles.settings}>

        <div className={styles.my_acc}>
          <div className={styles.edit}>
            <span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="30" height="30" rx="10" fill="#B0B7C3" />
                <path d="M9.64117 17.0224L8.90228 20.2113C8.87679 20.3278 8.87766 20.4486 8.90484 20.5648C8.93201 20.681 8.9848 20.7897 9.05934 20.8828C9.13388 20.976 9.2283 21.0514 9.33569 21.1034C9.44308 21.1554 9.56073 21.1828 9.68006 21.1835C9.73566 21.1891 9.79168 21.1891 9.84728 21.1835L13.0556 20.4446L19.2156 14.3079L15.7778 10.8779L9.64117 17.0224Z" fill="#B0B7C3" />
                <path d="M21.1518 11.2358L18.8574 8.94137C18.7066 8.79128 18.5024 8.70703 18.2896 8.70703C18.0768 8.70703 17.8727 8.79128 17.7218 8.94137L16.4463 10.2169L19.8802 13.6508L21.1557 12.3753C21.2304 12.3002 21.2895 12.2112 21.3297 12.1133C21.3699 12.0154 21.3904 11.9106 21.3901 11.8047C21.3897 11.6989 21.3685 11.5942 21.3276 11.4966C21.2867 11.3989 21.227 11.3103 21.1518 11.2358Z" fill="#B0B7C3" />
              </svg>
            </span>
            <p className={styles.my_acc__text}>My account</p>
          </div>

          <img className={styles.my_acc__icon2} src={SmallArrow} alt="icon" />
        </div>



        <div className={styles.settings__bottom}>
          {data.map((item, index) => (
            <div key={index} className={styles.settings__bottom__1}>
              <span style={{ display: 'flex', gap: '24px' }}>
                <img src={item.img} alt="icon" />
                <p className={styles.settings__bottom__1__title}>{item.title}</p>
              </span>
              <span className={styles.settings__bottom__1__group}>
                <p className={styles.settings__bottom__1__group__text}><i>{item.subtitle}</i></p>
                <span className={styles.smalArr}><img src={SmallArrow} alt="icon" /></span>
              </span>
            </div>

          ))}

        </div>

      </div>
    </div>
  )
};

export default Setting;