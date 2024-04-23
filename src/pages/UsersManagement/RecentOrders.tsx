import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserType } from '../../models/UserType';
import authService from "../../services/auth.service";
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const [usersData, setUsersData] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchUserDetails = async () => {
      let response: UserType[] = []; // Initialize response with an empty array
      response = await authService.getUserDetails();
      console.log("user data", response); // Use comma instead of plus sign for concatenation
      setUsersData(response);
    }

    fetchUserDetails();
  }, []);

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={ usersData } />
    </Card>
  );
}

export default RecentOrders;