import { Button } from "../Button/Button";
import style from "./style.module.css";

interface CardProps {
  title: string
  subtitle:string
  paragraph?: string
  image?: string
}

export const Card = ({ title, subtitle, paragraph, image } : CardProps) => {
  return (
    <div className={style.containerCard}>
      <img className={style.image} src={image} />
      <div className={style.contentCard}>
        <h2 className={style.title}>{title}</h2>
        <h4 className={style.subTitle}>{subtitle}</h4>
        <p className={style.paragraph}>{paragraph}</p>
        <input className={style.input} type="text" value="Opnião pública" />
        <Button className={style.button} label="Button" variant="primary" />
      </div>
    </div>
  )
}