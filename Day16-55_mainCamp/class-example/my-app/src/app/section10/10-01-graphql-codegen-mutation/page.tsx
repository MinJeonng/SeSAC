'use client';
// 이걸 import 해오면 타입까지 다 가지고 있게되는 것!!
import { CreateBoardDocument } from '@/commons/gql/graphql';
import { gql, useMutation } from '@apollo/client';

//위에 doc을 가지고 오면 아래 이 gql이 필요없게 되는 것
const CREATE_BOARD = gql`
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

export default function GraphqlMutationPage() {
  // myFunction이라는 state가 만들어짐
  //mutation은 엑셀을 바꾸는 것, 즉 등록하는 (query는 조회)
  const [myFunction] = useMutation(CreateBoardDocument);
  const onClickSubmit = async () => {
    // 타입이 모두 검증이 된다.
    const result = await myFunction({
      variables: {
        //variables가 $ 역할을 하기때문에 이 안에다가 쓰면 됌
        myWriter: '철수',
        myTitle: '제가말이에요',
        myContents: '빤가워요',
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    // result.data?.createBoard?.number -> 이렇게 추론 가능
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
