import { gql } from '@apollo/client';
import { BoardFormAddress } from '../33-05-fragments/board-for-address';

//  1. fragment를 붂는 하나의 기본 방법

// // 게시글 조회하기
// export const FETCH_BOARDS = gql`
//   fragment BoardForaddressSpecies on Board {
//     boardAddress {
//       address
//       addressDetail
//       zipcode
//     }
//   }
//   fragment  BoardForlikeSpecies on Board{
//   likeCount
//   dislikeCount
// }

//   query fetchBoards($page: Int,
//   $isBoardForAddressSet  : Boolean = false
//   $isBoardForLikeSet : Boolean = false
//   ) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//       createdAt

//     ...BoardForaddressSpecies @include(if : $isBoardForAddressSet)

//     ...BoardForlikeSpecies @include(if :$isBoardForLikeSet )
//   }
//   }
// `;

// 2. fragemt를 파일로 분리하여 결합하는 방법
// 게시글 조회하기
export const FETCH_BOARDS = gql`
  ${BoardFormAddress}
  ${BoardForLikeSet}

  query fetchBoards(
    $page: Int
    $isBoardForAddressSet: Boolean = false
    $isBoardForLikeSet: Boolean = false
  ) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt

      ...BoardForaddressSpecies @include(if: $isBoardForAddressSet)

      ...BoardForlikeSpecies @include(if: $isBoardForLikeSet)
    }
  }
`;
