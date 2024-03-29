import ModalCourse from "./modal-course/modal-course";
import ModalSignIn from "./modal-sign-in/modal-sign-in";
import "./modal.scss";

function Modal({
  modalVisible,
  changeModalVisible,
  modalType,
}) {
  return (
    modalVisible && (
      <div className="modal">
        <div className="modal__block">
          {modalType === "sign-in" && (
            <ModalSignIn
              changeModalVisible={changeModalVisible}
            />
          )}
          {modalType === "course" && <ModalCourse />}
          <button className="button modal__exit" onClick={changeModalVisible}>
            <img
              src={require("../../assets/img/exit.svg").default}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
