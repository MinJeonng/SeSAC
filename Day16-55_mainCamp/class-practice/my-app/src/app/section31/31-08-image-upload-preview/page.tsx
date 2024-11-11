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

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState('');
  const onChangeFile = async (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);

    // 파일을 선택하자마자 업로드하면 이미지찌꺼기 생기고 미리보기가 바로 안나오니까 불편함 생김
    // const result = await uploadFile({
    //   variables: { file: selectedFile },
    // });
    // console.log(result.data.uploadFile.url, 'url');

    // setImageUrl(result.data.uploadFile.url);

    //1. 임시URL 생성 -> 가짜url -> 내 브라우저에서만 접근 가능
    const previewResult = URL.createObjectURL(selectedFile);
    console.log(previewResult);

    //2. 임시 URL 생성 -> 진짜url-> 다른 브라우저에서도 접근 가능, 하지만 용량이 큼
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.onload = (e) => {
      console.log(e.target?.result); //문자열로 바뀐 결과
      if (typeof e.target?.result === 'string') {
        setImageUrl(e.target?.result as string);
      }
    };

    return (
      <>
        {/* multiple : input 속성 중 여러개 선택할 수 있는 것 */}
        <input type="file" onChange={onChangeFile} multiple />
        {/* <Image
        src={`https://storage.googleapis.com/${imageUrl}`}
        width={200}
        height={200}
        alt="구글다운로드사진"
      /> */}
        <Image src={imageUrl} width={200} height={200} alt="미리보기" />
      </>
    );
  };
}
