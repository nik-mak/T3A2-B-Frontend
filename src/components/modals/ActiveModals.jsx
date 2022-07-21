import React, { useContext } from "react";
import ModalsContext from "../../contexts/modals";
import HasRole from "../auth/HasRole";
import NotLoggedIn from "../auth/NotLoggedIn";
import LoginModal from "./LoginModal";
import AddListingModal from "./AddListingModal";
import SignUpModal from "./SignUpModal";
import ManageListingModal from "./ManageListingModal";

// Active modals used to render all modals the user needs to view on a page
function ActiveModals() {
  // Defines modalStates and setModalStates using the modals context
  const [modalStates, setModalStates] = useContext(ModalsContext);

  return (
    <>
      <NotLoggedIn>
        {/* renders the sign up modal component */}
        <SignUpModal
          open={modalStates.signUp}
          onClose={() =>
            setModalStates({ modalName: "signUp", action: "close" })
          }
          />
          {/* renders the login modal component */}
        <LoginModal
          open={modalStates.login}
          onClose={() =>
            setModalStates({ modalName: "login", action: "close" })
          }
        />
      </NotLoggedIn>
      <HasRole roles={["staff", "admin"]}>
        {/* renders the Add listing modal component */}
        <AddListingModal
          open={modalStates.addListing}
          onClose={() =>
            setModalStates({ modalName: "addListing", action: "close" })
          }
        />
        {/* renders the manage listing modal component */}
        <ManageListingModal           open={modalStates.manageListing}
          onClose={() =>
            setModalStates({ modalName: "manageListing", action: "close" })
          }/>
      </HasRole>
    </>
  );
}

export default ActiveModals;
