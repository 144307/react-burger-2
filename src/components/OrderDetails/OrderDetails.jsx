import styles from "./OrderDetails.module.css";

export const OrderDetails = ({ image }) => {
  return (
    <>
      <div className={styles.numbers}>034536</div>
      <div className={styles.numbersSubtitle}>идентификатор заказа</div>
      <img src={image} className={styles.done} />
      <div className={styles.subtitle1}>Ваш заказ начали готовить</div>
      <div className={styles.subtitle2}>
        Дождитесь готовности на орбитальной станции
      </div>
    </>
  );
};
