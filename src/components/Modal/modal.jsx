import React from "react";
import { useEffect } from "react";
import styles from "./modal.module.css";

import close from "../../images/close.svg";

// import ReactDOM from "react-dom";

// import { Ingrediets } from "../Ingrediets/Ingrediets";
// import { OrderDetails } from "../OrderDetails/OrderDetails";

// import ingrede

// export const Modal = ({ data, closeFunc }) => {
export const Modal = (props) => {
  useEffect(() => {
    // console.log("test data", data);
  });
  // useEffect();

  // const ingrediets = (
  //   <>
  //     <div
  //       className={styles.ingredientImage}
  //       style={{
  //         backgroundImage: `url(${data.image_large})`,
  //       }}
  //     ></div>
  //     <div className={styles.ingredientsTitle}>{data.name}</div>
  //     <div className={styles.ingredients}>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
  //         <div className={styles.ingredientsItemSubtitle}>{data.calories}</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Белки, г</div>
  //         <div className={styles.ingredientsItemSubtitle}>{data.proteins}</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Жиры, г</div>
  //         <div className={styles.ingredientsItemSubtitle}>{data.fat}</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Углеводы, г</div>
  //         <div className={styles.ingredientsItemSubtitle}>
  //           {data.carbohydrates}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const orderDetails = (
  //   <>
  //     <div className={styles.numbers}>034536</div>
  //     <div className={styles.numbersSubtitle}>идентификатор заказа</div>
  //     <img src={done} className={styles.done} />
  //     <div className={styles.subtitle1}>Ваш заказ начали готовить</div>
  //     <div className={styles.subtitle2}>
  //       Дождитесь готовности на орбитальной станции
  //     </div>
  //   </>
  // );

  // return ReactDOM.createPortal(
  //   <div
  //     className={styles.box}
  //     onClick={(e) => {
  //       e.stopPropagation();
  //     }}
  //   >
  //     <div className={styles.titleGroup}>
  //       <div className={styles.title}>Детали ингредиента</div>
  //       <div
  //         className={styles.closeButton}
  //         style={{ backgroundImage: `url(${close})` }}
  //         onClick={props.closeFunc}
  //       ></div>
  //     </div>
  //     {props.children}
  //     {/* {CurrentModalOverlay ? ingrediets : orderDetails} */}
  //     {/* true - ingredients, false - order */}
  //   </div>,
  //   // parentRef.current
  //   document.getElementById("modal")
  // );

  return (
    <div
      className={styles.box}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.titleGroup}>
        <div className={styles.title}>Детали ингредиента</div>
        <div
          className={styles.closeButton}
          style={{ backgroundImage: `url(${close})` }}
          onClick={props.closeFunc}
        ></div>
      </div>
      {props.children}
    </div>
  );
};
