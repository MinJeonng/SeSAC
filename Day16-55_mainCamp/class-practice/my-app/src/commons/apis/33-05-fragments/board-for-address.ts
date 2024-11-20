import { gql } from '@apollo/client';

export const BoardFormAddress = gql`
  fragment BoardForLikeSet on Board {
    likeCount
    dislikeCount
  }
`;
