import style from './style.module.css'

type ButtonProps = {
  label: string,
  type?: "button" | "submit" | "reset"
}

export default function Button({ label, type = 'button' }: ButtonProps) {
  return (
    <button className={style.button} type={type}>{label}</button>
  )
}