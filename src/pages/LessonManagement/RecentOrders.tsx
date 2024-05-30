import { Card } from '@mui/material';
import { UserType } from '../../models/UserType';
import { ChangeEvent, FC, useState } from 'react';
import RecentOrdersTable from './RecentOrdersTable';
import { TopicType } from '../../models/TopicType';
import { LessonsType } from '../../models/LessonsType';
import { LessonsData } from '../../models/LessonsData';
interface RecentOrdersTableProps {
  cryptoOrders: LessonsData[];
}
const RecentOrders: FC<RecentOrdersTableProps> = ({cryptoOrders}) =>{

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={ cryptoOrders } />
    </Card>
  );
}

export default RecentOrders;