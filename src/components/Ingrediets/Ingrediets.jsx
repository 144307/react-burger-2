import styles from "./Ingrediets.module.css";

export const Ingrediets = ({ data }) => {
  return (
    <>
      <div
        className={styles.ingredientImage}
        style={{
          backgroundImage: `url(${data.image_large})`,
        }}
      ></div>
      <div className={styles.ingredientsTitle}>{data.name}</div>
      <div className={styles.ingredients}>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
          <div className={styles.ingredientsItemSubtitle}>{data.calories}</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Белки, г</div>
          <div className={styles.ingredientsItemSubtitle}>{data.proteins}</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Жиры, г</div>
          <div className={styles.ingredientsItemSubtitle}>{data.fat}</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Углеводы, г</div>
          <div className={styles.ingredientsItemSubtitle}>
            {data.carbohydrates}
          </div>
        </div>
      </div>
    </>
  );
};
