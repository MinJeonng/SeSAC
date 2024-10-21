'use client';

import { CheckValidationFile } from '@/commons/utils/18-03-image-validation-file';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

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
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // 파일 선택할때 한개가 아니라 여러개 선택하게 할 수 있으므로 files!! files의 배열형태로 한개든, 여러개든 들어오게 됌
    // 배열로 들어오는 이유 : <input type = "file" multiple/> 일때, 여러개 드래그 가능
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);

    // 파일 선택되지 않았을때 로직 처리
    if (!selectedFile) return;

    // 많이 쓰이는 로직이니까 함수로 뺌
    const isValid = CheckValidationFile(selectedFile);
    if (!isValid) return; //여기서 return해서 함수 종료할때 여기서 종료되는건 onChangeFile이 됌

    const result = await uploadFile({
      variables: { file: selectedFile },
    });
    console.log(result.data.uploadFile.url, 'url');

    setImageUrl(result.data.uploadFile.url);
  };

  const onClickImg = () => {
    //  ref가 Input태그라서 click이벤트 있다! 라고 type 정의해주면 됌
    fileRef.current?.click();
  };

  ////////////////////////////////////
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          password: '1234',
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  return (
    <>
      작성자 : <input onChange={onChangeWriter} type="text" /> <br />
      제목 : <input onChange={onChangeTitle} type="text" />
      <br />
      내용 : <input onChange={onChangeContents} type="text" />
      <br />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}
        onClick={onClickImg}
      >
        파일 선택
      </div>
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        multiple
        style={{ display: 'none' }}
        // accept를 통해 아예 이 외에는 선택안되게 할 수 있음
        // jpeg = jpg 동일한 뜻
        accept="image/jpeg, image/png"
      />
      <Image
        src={`https://storage.googleapis.com/${imageUrl}`}
        width={200}
        height={200}
        alt="구글다운로드사진"
      />
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </>
  );
}
