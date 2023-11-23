import { type User } from "./types";
import "./Table.css";

interface TableProps {
  data: User[];
}

export const Table = ({ data }: TableProps) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
