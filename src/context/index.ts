import { useApolloClient } from "@apollo/react-hooks";
import { useState } from "react";
import { createContainer } from "unstated-next";
import {
  CreateUserDocument,
  CreateUserInput,
  CreateUserMutation,
  CreateUserMutationVariables,
  RemoveUserDocument,
  RemoveUserMutation,
  RemoveUserMutationVariables,
  User,
  ProductsDocument,
  ProductsQuery,
} from "../generated/graphql";

function useProductsStore() {
  const [Products, setProducts] = useState<User[]>([]);
  const [error, setError] = useState("");

  const client = useApolloClient();

  const getProducts = async () => {
    const result = await client.query<ProductsQuery>({
      query: ProductsDocument,
    });
    if (result.data?.Products) {
      setProducts(result.data.Products);
      setError("");
    } else {
      setError(`cannot querys Products`);
    }
  };

  const addUser = async (user: CreateUserInput) => {
    const result = await client.mutate<
      CreateUserMutation,
      CreateUserMutationVariables
    >({
      mutation: CreateUserDocument,
      variables: { input: user },
    });
    if (result.data?.createUser) {
      setProducts([...Products, result.data.createUser]);
      setError("");
    } else {
      setError(`cannot add user ${user}`);
    }
  };

  const deleteUser = async (id: string) => {
    const result = await client.mutate<
      RemoveUserMutation,
      RemoveUserMutationVariables
    >({
      mutation: RemoveUserDocument,
      variables: { id },
    });
    if (result.data?.removeUser) {
      setProducts(Products.filter((user) => user.id !== id));
      setError("");
    } else {
      setError(`cannot delete user ${id}`);
    }
  };

  return { Products, error, getProducts, addUser, deleteUser };
}

export const ProductsStore = createContainer(useProductsStore);
