import { useEffect, useState } from "react";
import { type User } from "./types";
import { Table } from "./Table";

export const TableContainer = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch("/users.json");
      const data: User[] = await response.json();

      setUsers(data);
    };

    requestData();
  }, []);

  return <Table data={users} />;
};
