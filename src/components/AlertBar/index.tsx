import React from "react";
import style from "./style.module.css";
import Button from "../Button";

interface IconProps {
  variant?: string;
}
interface AlertBarProps {
  title: string;
  description?: string;
  variant?: 'info' | 'check' | 'error' | 'warning';
  IconClose: React.ElementType;
  IconNotification?: React.ElementType<IconProps>;
}

const AlertBar = ({ title, description, IconClose, IconNotification: Icon, variant='info' }: AlertBarProps) => {
  const iconVariantClass = Icon ? `icon-${variant.toLowerCase()}` : '';

  return (
    <div className={style.containerAlertBar}>
      <div className={`${style.IconNotification} ${iconVariantClass}`}>
      {Icon && <Icon variant={variant} />}
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
