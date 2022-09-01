import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
// import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
// import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

import { useEffect, useRef } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Api from "../../utils/Api/Api";

import "../../fonts/fonts.css";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

const myApi = new Api(apiUrl);

// interface Props {
//   _id: string;
//   name: string;
//   type: string;
//   proteins: number;
//   fat: number;
//   carbohydrates: number;
//   calories: number;
//   price: number;
//   image: string;
//   image_mobile: string;
//   image_large: string;
//   __v: number;
// }

export const App = () => {
  const [data, setData] = React.useState([]); // <any[]>
  const [ingredientsList, setIngredientsList] = React.useState([]); // <any[]>
  const [constructorList, setConstructorList] = React.useState([]);
  const [modalOppened, setModalOppened] = React.useState(false);
  const [CurrentModalOverlay, setCurrentModalOverlay] = React.useState(false); // true - ingredients, false - order
  const [modalState, setModalState] = React.useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        // console.log("response", response);
        // this.state = {date: new Date()};
        setData(response.data);
        setIngredientsList(response.data);
        setConstructorList(response.data);
        // console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const openIngredientDetails = (id: string, returnedData: Props[]) => {
  const openIngredientDetails = (id, returnedData) => {
    // setModalOppened(!modalOppened);
    setModalOppened(true);
    // console.log("returnedData", returnedData);
    setData(ingredientsList.filter((e) => e._id === id)[0]);
    setCurrentModalOverlay(true);
  };

  // const openOrderDetails = (basket: Props) => {
  const openOrderDetails = (basket) => {
    setModalOppened(true);
    // setModalOppened(!modalOppened);
    // console.log("openOrderDetails", basket);
    setCurrentModalOverlay(false);
  };

  const closeModal = () => {
    setModalOppened(false);
  };

  // const [current, setCurrent] = React.useState("one");
  return (
    <>
      <div className="App">
        <AppHeader />
        <div className={styles.box}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients
              data={ingredientsList}
              openIngredientDetails={openIngredientDetails}
            />
            <BurgerConstructor
              data={constructorList}
              openIngredientDetails={openIngredientDetails}
              openOrderDetails={openOrderDetails}
            />
          </DndProvider>
        </div>
      </div>
      {modalOppened && (
        <ModalOverlay
          // object={"test"}
          data={data}
          modalOppened={modalOppened}
          CurrentModalOverlay={CurrentModalOverlay}
          closeModal={closeModal}
        ></ModalOverlay>
      )}
    </>
  );
};
