import { gql, GraphQLClient } from 'graphql-request';

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphqlClient = new GraphQLClient(
      'https://main-practice.codebootcamp.co.kr/graphql',
      { credentials: 'include' }
    );
    // accessToken 던져서 refreshToken 받음
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error);
  }
};
