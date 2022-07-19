import React, { useContext } from "react";
import ModalsContext from "../../contexts/modals";
import HasRole from "../auth/HasRole";
import NotLoggedIn from "../auth/NotLoggedIn";
import LoginModal from "./LoginModal";
import AddListingModal from "./AddListingModal";
import SignUpModal from "./SignUpModal";
import ManageListingModal from "./ManageListingModal";

function ActiveModals() {
  const [modalStates, setModalStates] = useContext(ModalsContext);

  return (
    <>
      <NotLoggedIn>
        <SignUpModal
          open={modalStates.signUp}
          onClose={() =>
            setModalStates({ modalName: "signUp", action: "close" })
          }
        />
        <LoginModal
          open={modalStates.login}
          onClose={() =>
            setModalStates({ modalName: "login", action: "close" })
          }
        />
      </NotLoggedIn>
      <HasRole roles={["staff", "admin"]}>
        <AddListingModal
          open={modalStates.addListing}
          onClose={() =>
            setModalStates({ modalName: "addListing", action: "close" })
          }
        />
        <ManageListingModal           open={modalStates.manageListing}
          onClose={() =>
            setModalStates({ modalName: "manageListing", action: "close" })
          }/>
      </HasRole>
    </>
  );
}

export default ActiveModals;
