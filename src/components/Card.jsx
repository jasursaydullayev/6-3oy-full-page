import styles from "./card.module.css"
function Card({ title, img, paragraph, order }) {
    return (
        <div className={styles.card}>
        <img width={100} height={127} src={img} alt="" />
        <div className="card-content">
        <span>{order}</span>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        </div>
        </div>
    )
}
export default Card