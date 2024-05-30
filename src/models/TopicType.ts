import { TopicData } from "./TopicData";

export interface TopicType {
  currentPage: number;
  pageSize: number;
  results: TopicData[];
  totalElements: string;
  totalPages: number;
}
