/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createBoard(\n    # 타입 적는 곳\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    # 전달할 변수 적는 곳\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      number\n      message\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation createProduct(\n    # 타입 쓸때 ! 있는지 없는지 잘 확인하기\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": types.CreateProductDocument,
    "\n  query fetchBoard($number: Int) {\n    fetchBoard(number: $number) {\n      number\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoardDocument,
    "\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      _id\n      number\n      message\n    }\n  }\n": types.DeleteBoardDocument,
    "\n  mutation updateBoard(\n    $number: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $number\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard(\n    # 타입 적는 곳\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    # 전달할 변수 적는 곳\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard(\n    # 타입 적는 곳\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    # 전달할 변수 적는 곳\n    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct(\n    # 타입 쓸때 ! 있는지 없는지 잘 확인하기\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    # 타입 쓸때 ! 있는지 없는지 잘 확인하기\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($number: Int) {\n    fetchBoard(number: $number) {\n      number\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($number: Int) {\n    fetchBoard(number: $number) {\n      number\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBoard($number: Int) {\n    deleteBoard(number: $number) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard(\n    $number: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $number\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard(\n    $number: Int\n    $myWriter: String\n    $myTitle: String\n    $myContents: String\n  ) {\n    updateBoard(\n      number: $number\n      writer: $myWriter\n      title: $myTitle\n      contents: $myContents\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;