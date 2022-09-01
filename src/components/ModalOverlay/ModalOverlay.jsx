import React from "react";
import { useEffect } from "react";

import styles from "./ModalOverlay.module.css";

import done from "../../images/done.svg";

import { Modal } from "../Modal/modal";

import { Ingrediets } from "../Ingrediets/Ingrediets";
import { OrderDetails } from "../OrderDetails/OrderDetails";

import ReactDOM from "react-dom";

export const ModalOverlay = ({
  data,
  modalOppened,
  CurrentModalOverlay,
  closeModal,
}) => {
  const newRef = React.createRef();

  useEffect(() => {
    openFunc();
  }, [modalOppened]);

  const openFunc = () => {
    newRef.current.style.display = "flex";
  };

  const closeFunc = () => {
    closeModal();
    newRef.current.style.display = "none";
  };

  return ReactDOM.createPortal(
    <div className={styles.overlayOppened} ref={newRef} onClick={closeFunc}>
      <Modal
        // data={data}
        closeFunc={closeFunc}

        // CurrentModalOverlay={CurrentModalOverlay}
        // onClick={console.log("ModalOverlay data", data)}
      >
        {CurrentModalOverlay ? (
          <Ingrediets data={data} />
        ) : (
          <OrderDetails image={done} />
        )}
      </Modal>
    </div>,
    document.getElementById("modal")
  );
};

// class ModalOverlay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = props.data;
//     this.ingredientRef = props.ingredientRef;
//     this.newRef = React.createRef();
//     this.oppened = false;
//     this.state = { message: "testing" };
//   }
//   componentDidMount() {
//     this.ingredientRef.current = this.testOutput;
//     this.openFunc();
//   }

//   testOutput = () => {
//     console.log("-=CHECK=-");
//   };

//   openFunc = () => {
//     console.log("open");
//     this.oppened = true;
//     this.newRef.current.style.display = "flex";
//   };

//   closeFunc = () => {
//     console.log("close");
//     this.oppened = false;
//     this.newRef.current.style.display = "none";
//   };

//   render() {
//     return (
//       <div
//         className={this.oppened ? styles.overlayOppened : styles.overlayClosed}
//         ref={this.newRef}
//       >
//         <Modal
//           data={this.data}
//           closeFunc={this.closeFunc}
//           // onClick={console.log("ModalOverlay data", data)}
//         />
//       </div>
//     );
//   }
// }
// export default ModalOverlay;
