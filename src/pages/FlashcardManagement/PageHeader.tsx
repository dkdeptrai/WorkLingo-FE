import { Typography, Button, Grid } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { FC, useState } from "react";
import { TopicType } from "../../models/TopicType";
import FormTopic from "../../components/FormTopic";
import CreateTopic from "../../components/CreateTopic";
import { FlashcardType } from "../../models/FlascardType";
interface RecentOrdersTableProps {
  userdata: FlashcardType[];
}
const PageHeader: FC<RecentOrdersTableProps> = ({ userdata }: { userdata: FlashcardType[] }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Flashcard Management
        </Typography>
        <Typography variant="subtitle2">
          Hello, these are your flashcards
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
