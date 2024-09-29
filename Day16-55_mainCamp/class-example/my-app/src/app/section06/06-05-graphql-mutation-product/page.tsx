'use client';
import { gql, useMutation } from '@apollo/client';

// 변수를 입력해서 하려면 타입을 지정해줘야함

const CREATE_PRODUCT = gql`
  mutation createProduct(
    # 타입 쓸때 ! 있는지 없는지 잘 확인하기
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

//값을 state에 넣어보자
export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(CREATE_PRODUCT);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        seller: '김태섭',
        createProductInput: {
          name: '아디다스',
          detail: '인기템',
          price: 5000000,
        },
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </>
  );
}
