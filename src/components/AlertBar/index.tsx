import React from "react";
import style from "./style.module.css";
import Button from "../Button";

interface AlertBarProps {
  title: string;
  description?: string;
  IconClose: React.ElementType;
  IconNotification?: React.ElementType;
}

const AlertBar = ({ title, description, IconClose, IconNotification: Icon }: AlertBarProps) => {
  return (
    <div className={style.containerAlertBar}>
      <div>
        {Icon && <Icon />}
      </div>
      <div className={style.contentAlertBar}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div><Button label="Click here" size="white" variant="secondary" /></div>
      </div>
      <div className={style.icons}>
        <IconClose />
      </div>
    </div>
  );
};

export default AlertBar;
