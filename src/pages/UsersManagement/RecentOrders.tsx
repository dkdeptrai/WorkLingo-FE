import { Card } from '@mui/material';
import { UserType } from '../../models/UserType';
import { ChangeEvent, FC, useState } from 'react';
import RecentOrdersTable from './RecentOrdersTable';
interface RecentOrdersTableProps {
  cryptoOrders: UserType[];
}
const RecentOrders: FC<RecentOrdersTableProps> = ({cryptoOrders}) =>{

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={ cryptoOrders } />
    </Card>
  );
}

export default RecentOrders;