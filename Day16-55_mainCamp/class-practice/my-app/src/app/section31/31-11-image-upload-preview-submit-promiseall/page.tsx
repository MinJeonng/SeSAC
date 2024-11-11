'use client';

import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [imageUrls, setImageUrls] = useState(['', '', '']);
  const [files, setFiles] = useState<File[]>([]);

  const onChangeFile = (index) => async (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);

    //2. 임시 URL 생성 -> 진짜url-> 다른 브라우저에서도 접근 가능, 하지만 용량이 큼
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.onload = (e) => {
      console.log(e.target?.result); //문자열로 바뀐 결과
      if (typeof e.target?.result === 'string') {
        const tempUrls = [...imageUrls];
        tempUrls[index] = e.target?.result; // 미리보기 주소임
        setImageUrls(tempUrls);

        const tempFiles = [...files]; //files : state임
        tempFiles[index] = selectedFile;
        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    // for 내에서 await 쓰지않기!!!!! 전혀 효율적이지 못함
    //1. 이미지 다중업로드
    //1-1 안좋은예제 - await를 매번 기다리기
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const urls = [
    //   resultFile0.data.uploadFile.url,
    //   resultFile1.data.uploadFile.url,
    //   resultFile2.data.uploadFile.url,
    // ];

    //1-2 좋은예제 - Promise.all()
    // const goodResults = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // console.log(goodResults); //[resultFile0, resultFile1, resultFile2] 이런식으로 뽑힘
    // goodResults.map((el) => el.data.uploadFile.url); //각각 url이 뽑힐 것 [url0, url1, url2]

    //1-3. 좋은예제=- Promise.all() 리팩토링
    // el이 files[0]... 이런거
    const results = await Promise.all(
      files.map((el) => uploadFile({ variables: { file: el } }))
    );
    console.log(results);
    const resultUrls = results.map((el) => el.data.uploadFile.url); //[url0, url1, url2]

    //2. 게시글 등록하기
    const createResult = await createBoard({
      variables: {
        createBoardInput: {
          writer: 'testUser',
          password: '1234',
          title: 'testTitle',
          contents: 'testContents',
          images: resultUrls,
        },
      },
    });
    console.log(createResult);
  };

  return (
    <>
      {/* multiple : input 속성 중 여러개 선택할 수 있는 것 */}
      <input type="file" onChange={onChangeFile(0)} multiple />
      <input type="file" onChange={onChangeFile(1)} multiple />
      <input type="file" onChange={onChangeFile(2)} multiple />

      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      {/* Image는 src 속성이 문자열로 들어와야함 */}
      {imageUrls.map(
        (url, index) =>
          url && (
            <Image
              key={index}
              src={url}
              width={200}
              height={200}
              alt={`미리보기 ${index + 1}`}
            />
          )
      )}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
