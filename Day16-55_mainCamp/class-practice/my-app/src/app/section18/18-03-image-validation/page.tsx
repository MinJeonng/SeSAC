'use client';

import { CheckValidationFile } from '@/commons/utils/18-03-image-validation-file';
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState('');
  const fileRef = useRef();

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
    // document.getElementById('fileTagId')?.click()
    // 대신에 useRef 써보자.
    // ref는 레퍼런스 , 쓰고싶은데에 등록하면 그걸 계속해서 쓸 수 있으
    // fileRef로 설정한 태그를 선택하는 것!!! 위의 바닐라자바스크립트랑 동일한 의미
    fileRef.current.click();
  };

  return (
    <>
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
    </>
  );
}
