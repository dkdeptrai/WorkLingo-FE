import { LessonsData } from "./LessonsData";

export interface LessonsType {
  currentPage: number;
  pageSize: number;
  results: LessonsData[];
  totalElements: string;
  totalPages: number;
}
