export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface UserType {
  id: string;
  // status: CryptoOrderStatus;
  firstname: string;
  lastname: number;
  email: string;
  jobTitle: string;
  avatarUrl: string;
  bio: number;
}
