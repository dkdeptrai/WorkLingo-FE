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
import { LessonsType } from "../../models/LessonsType";
import { LessonsData } from "../../models/LessonsData";
interface RecentOrdersTableProps {
  userdata: LessonsData[];
}
const PageHeader: FC<RecentOrdersTableProps> = ({ userdata }: { userdata: LessonsData[] }) => {
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
          Lessons Management
        </Typography>
        <Typography variant="subtitle2">
          Hello, these are your lessons
        </Typography>
      </Grid>
      {/* <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleClickOpen}
        >
          Create Topic
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <CreateTopic />
          </DialogContent> 
           <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Grid> */}
    </Grid>
  );
}

export default PageHeader;
