import style from "./style.module.css";
import Button from "../Button";

interface AlertBarProps {
  title: string
  description?: string
  iconinfo: string
  iconclose: string
}

const AlertBar = ({ title, description, iconinfo, iconclose } : AlertBarProps) => {
  return (
    <div className={style.containerAlertBar}>
        <div className={style.icons}>
          <img src={iconinfo} alt="Icon 1" className={style.iconinfo} />
          <img src={iconclose} alt="Icon 2" className={style.iconclose} />
        </div>
      <div className={style.contentAlertBar}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.divbutton}>
            <Button className={style.button} label="Click here" size="s" />
        </div>
        </div>
    </div>
  )
}

export default AlertBar