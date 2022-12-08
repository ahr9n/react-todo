import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ show, handleRemove, handleClose }) {
  return (
    <Modal open={show} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this item?
        </Typography>
        <br />
        <Stack direction="row" spacing={2} className="">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleRemove}
          >
            Delete
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
