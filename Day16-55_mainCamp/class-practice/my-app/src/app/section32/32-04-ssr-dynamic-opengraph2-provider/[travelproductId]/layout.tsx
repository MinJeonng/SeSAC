//'use client';이걸 지우면 서버컴포넌트가 되고, 서버에서 조회하고 모두 그려서 내려보내줌(SSR: 서버사이드렌더링). 따라서, 브라우저에서 하이드레이션은 안함

import { gql } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';

const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      contents
      images
    }
  }
`;
//서버컴포넌트는 async가 여기서 쓸 수 있음
export default async function OpenGraphProviderLayout({ children, params }) {
  // const params = useParams();

  // const { data } = useQuery(FETCH_TRAVEL_PRODUCT, {
  //   variables: { travelproductId: params.travelproductId },
  // });
  const graphqlClient = new GraphQLClient(
    'https://main-practice.codebootcamp.co.kr/graphql'
  );
  const data = await graphqlClient.request(FETCH_TRAVELPRODUCT, {
    travelproductId: params.travelproductId,
  });
  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct?.name} />
      <meta
        property="og:description"
        content={data?.fetchTravelproduct?.remarks}
      />
      <meta
        property="og:image"
        content={data?.fetchTravelproduct?.images?.[0]}
      />
      <>{children}</>
    </>
  );
}
