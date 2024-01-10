import React from "react";
import style from "./style.module.css";
import Button from "../Button";
import classNames from 'classnames';
interface AlertBarProps {
  title: string
  description?: string
  IconClose: React.ElementType;
  icon?: string
}

const AlertBar = ({ title, description, IconClose, icon} : AlertBarProps) => {
  const containerClassnames = classNames('material-icons');

  return (
    <div className={style.containerAlertBar}>
        <div className={style.icons} >
        <IconClose />
        </div>
        <div>
        <i className={containerClassnames}>{icon}</i>
        </div>
      <div className={style.contentAlertBar}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.containerButton}>
            <Button className={style.button} label="Click here" size="s" />
        </div>
        </div>
    </div>
  )
}

export default AlertBar