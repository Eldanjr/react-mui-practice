import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, EmojiEmotions } from "@mui/icons-material";
import { styled } from "@mui/system";
import avatar2 from "../assets/images/avatar2.jpg";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  // alignItems: "center",
});

export default function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={3}
          flexDirection="column"
        >
          <Typography variant="h6" textAlign={"center"}>
            Create Post
          </Typography>
          <StyledBox>
            <Avatar src={avatar2} alt="avatar" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Wick
            </Typography>
          </StyledBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" mt={3} mb={3}>
            <EmojiEmotions />
            <EmojiEmotions />
            <EmojiEmotions />
            <EmojiEmotions />
          </Stack>

          <ButtonGroup fullWidth>
            <Button
              variant="contained"
              aria-label="outlined primary button group"
            >
              Post
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
