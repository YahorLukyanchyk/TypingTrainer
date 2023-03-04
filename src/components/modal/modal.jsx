import ModalCourse from "./modal-course/modal-course";
import ModalSignIn from "./modal-sign-in/modal-sign-in";
import "./modal.scss";

function Modal({
  modalVisible,
  modalType,
  resetModalVisible,
  getUserData,
  setLoggedStatus,
  userData,
}) {
  return (
    modalVisible && (
      <div className="modal">
        <div className="modal__block">
          {modalType === "sign-in" && (
            <ModalSignIn
              getUserData={getUserData}
              setLoggedStatus={setLoggedStatus}
              userData={userData}
              resetModalVisible={resetModalVisible}
            />
          )}
          {modalType === "course" && <ModalCourse />}
          <button className="button modal__exit" onClick={resetModalVisible}>
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
