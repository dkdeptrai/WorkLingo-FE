import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper/index";
import { Grid, Container } from "@mui/material";
import { UserType, CryptoOrderStatus } from '../../models/UserType';

import RecentOrders from "./RecentOrders";
import { FC, useEffect, useState } from "react";
import authService from "../../services/auth.service";
import { TopicType } from "../../models/TopicType";
import { LessonsType } from "../../models/LessonsType";
import { LessonsData } from "../../models/LessonsData";


const ApplicationsTransactions:FC = () =>{
  const [userData, setUserData] = useState<LessonsData[]>([]);
  useEffect(() => {
    const fetchUserDetails = async () => {
      let response: LessonsType[] = []; 
      response = await authService.getAllLessons();
      console.log("user data", response.results);
      setUserData(response.results);
    }

    fetchUserDetails();
  }, []);
  return (
    <>
      <Helmet>
        <title>Lessons Management</title>
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
