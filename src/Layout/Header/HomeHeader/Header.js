import { useState } from "react";
import LoginPage from "../../../Component/Modal/LoginModal/LoginModal";
import "../../../Component/Modal/LoginModal/loginModal.css";
import { Button, Modal, ModalHeader } from "reactstrap";
import './header.css'

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [navDark, setNavDark] = useState(false);
  const [menulist, setMenulist] = useState(false);
  window.addEventListener("scroll", navHandler);
  window.addEventListener("resize", menulistHandler);
  
  
  function navHandler() {
    if (window.scrollY >= 80) {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  }
  function menulistHandler() {
    if (window.innerWidth <= 560) {
      setMenulist(true);
    } else {
      setMenulist(false);
    }
  }
  return (
    <nav  className={navDark? "navactive" : ""} id='headerNav'>
      <div className="logo">
        <h1 className="pt-1 ">MyDashbord</h1>
        {menulist ? (
          <></>
        ) : (
          <ul className="pt-2 mt-2 ">
            <li className="solution">Solution</li>
            <li>Tools</li>
            <li>About</li>
          </ul>
        )}
      </div>
      <Button
        id="ModelBtn"
        outline={modalOpen}
        onClick={() => setModalOpen(true)}
      >
        Login
      </Button>
      <Modal
        fullscreen
        isOpen={modalOpen}
        className="shadow p-md-5 p-sm-3 rounded"
        id="modaloverLay"
      >
        <ModalHeader toggle={() => setModalOpen(false)}></ModalHeader>{" "}
        <LoginPage />
      </Modal>
    </nav>
  );
};

export default Navbar;
