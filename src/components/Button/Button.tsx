import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

// Definindo a interface para as propriedades
interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  label?: string | number;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  format?: 'standard' | 'outline' | undefined;
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: string;
  iconClassName?: string;
  iconSize?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  element?: React.ElementType;
  [x: string]: unknown; // para propriedades adicionais
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComponent(
  {
    className,
    type,
    label,
    variant = 'primary',
    format = 'standard',
    size = 's',
    disabled = false,
    onClick,
    element: ButtonElement = 'button',
    ...rest
  },
  ref,
) {
  const buttonClassNames = classNames(
    style.button,
    style[`type-${variant}`],
    disabled ? style.standard : style[format],
    style[`size-${size}`],
    {
      [style.disabled]: disabled,
      [style.hasLabel]: Boolean(label),
    },
  )

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {label}
    </ButtonElement>
  )
})
