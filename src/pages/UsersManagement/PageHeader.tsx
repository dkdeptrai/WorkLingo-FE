import { Typography, Button, Grid } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { FC, useState } from "react";
import Form from "../../components/Form";
import { UserType } from "../../models/UserType";
interface RecentOrdersTableProps {
  userdata: UserType[];
}
const PageHeader: FC<RecentOrdersTableProps> = ({ userdata }: { userdata: UserType[] }) => {
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
          User Management
        </Typography>
        <Typography variant="subtitle2">
          Hello, these are your users
        </Typography>
      </Grid>
      {/* <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleClickOpen}
        >
          Create user
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create user</DialogTitle>
          <DialogContent>
            <Form userdata={userdata}/>
          </DialogContent> */}
          {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create
            </Button>
          </DialogActions> */}
        {/* </Dialog>
      </Grid> */}
    </Grid>
  );
}

export default PageHeader;
