import { gql } from '@apollo/client';

export const CRETE_BOARD = gql`
  mutation createBoard(
    # 타입 적는 곳
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    # 전달할 변수 적는 곳
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      number
      message
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    updateBoard(
      number: $number
      writer: $myWriter
      title: $myTitle
      contents: $myContents
    ) {
      _id
      number
      message
    }
  }
`;
