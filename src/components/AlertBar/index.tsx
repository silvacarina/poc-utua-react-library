import React from "react";
import style from "./style.module.css";
import Button from "../Button";

interface AlertBarProps {
  title: string;
  description?: string;
  IconClose: React.ElementType;
  Icon?: React.ElementType;
}

const AlertBar = ({ title, description, IconClose, Icon }: AlertBarProps) => {
  return (
    <div className={style.containerAlertBar}>
      <div className={style.icons}>
        <IconClose />
      </div>
      <div>
        {Icon && <Icon />}
      </div>
      <div className={style.contentAlertBar}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.containerButton}>
          <Button className={style.button} label="Click here" size="s" />
        </div>
      </div>
    </div>
  );
};

export default AlertBar;
