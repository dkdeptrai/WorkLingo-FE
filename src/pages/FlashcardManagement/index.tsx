import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper/index";
import { Grid, Container } from "@mui/material";
import { UserType, CryptoOrderStatus } from '../../models/UserType';

import RecentOrders from "./RecentOrders";
import { FC, useEffect, useState } from "react";
import authService from "../../services/auth.service";
import { FlashcardType } from "../../models/FlascardType";


const ApplicationsTransactions:FC = () =>{
  const [userData, setUserData] = useState<FlashcardType[]>([]);
  useEffect(() => {
    const fetchUserDetails = async () => {
      let response: FlashcardType[] = []; 
      response = await authService.getAllFlashcard();
      console.log("flashcard", response);
      setUserData(response);
    }

    fetchUserDetails();
  }, []);
  return (
    <>
      <Helmet>
        <title>FLashcard Management</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader userdata={userData}/>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders cryptoOrders={userData}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ApplicationsTransactions;
