import React from "react";
import classNames from 'classnames';
import style from "./style.module.css";
import Button from "../Button";

interface IconProps {
  variant?: string;
}
interface AlertBarProps {
  title: string;
  description?: string;
  iconVariant?: 'info' | 'check' | 'error' | 'warning';
  IconClose: React.ElementType;
  IconNotification?: React.ElementType<IconProps>;
}

const AlertBar = ({ title, description, IconClose, IconNotification: Icon, iconVariant='info' }: AlertBarProps) => {

  return (
    <div className={classNames(style.containerAlertBar)}>
      <div className={classNames(style.iconNotification, {
        [style[iconVariant]]: Boolean(Icon)
      })}>
      {Icon && <Icon variant={iconVariant} />}
      </div>
      <div className={style.contentAlertBar}>
        <h3 className={style.title}>{title}</h3>
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
