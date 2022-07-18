import React from "react";

const style = {
  position: "absolute",
  left: "50%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ConfirmationModal({open, onClose, heading, text}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="overflow-auto hover:overflow-scroll"
    >
      <Box
        sx={style}
        className="flex w-full translate-y-[0] translate-x-[-50%] flex-col sm:top-[50%] sm:w-96 sm:translate-y-[-50%] tall:top-0 tall:translate-y-[0]"
      ></Box>
    </Modal>
  );
}

export default ConfirmationModal;
