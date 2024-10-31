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
    "\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoardsDocument,
    "\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n": types.FetchBoardsCountDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n": types.UploadFileDocument,
    "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n      images\n    }\n  }\n": types.CreateBoardDocument,
    "\n  query fetchBoardsSearch($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoardsSearchDocument,
    "\n  query fetchBoards3 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoards3Document,
    "\n  query fetchBoards1 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoards1Document,
    "\n  query fetchBoards4 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoards4Document,
    "\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"6719bccf5413b3002914df98\"\n      password: \"1234\"\n      updateBoardInput: { title: \"제목 수정 변경\", contents: \"내용 변경\" }\n    ) {\n      _id\n      title\n      writer\n      contents\n    }\n  }\n": types.UpdateBoardDocument,
    "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n": types.FetchUserLoggedInDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserDocument,
    "\n  query fetchBoards2 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n": types.FetchBoards2Document,
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
export function graphql(source: "\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n"): (typeof documents)["\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n      images\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n      images\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardsSearch($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardsSearch($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards3 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards3 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards1 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards1 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards4 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards4 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"6719bccf5413b3002914df98\"\n      password: \"1234\"\n      updateBoardInput: { title: \"제목 수정 변경\", contents: \"내용 변경\" }\n    ) {\n      _id\n      title\n      writer\n      contents\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"6719bccf5413b3002914df98\"\n      password: \"1234\"\n      updateBoardInput: { title: \"제목 수정 변경\", contents: \"내용 변경\" }\n    ) {\n      _id\n      title\n      writer\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n"): (typeof documents)["\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards2 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards2 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n      createdAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;