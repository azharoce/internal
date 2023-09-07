// import React, { useEffect } from "react";
import { ProductsStore } from "../../context/index";

export const UserList = () => {
  const { prod, getProducts, deleteUser } = ProductsStore.useContainer();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <button onClick={() => deleteUser(user.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};
