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
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // 파일 선택할때 한개가 아니라 여러개 선택하게 할 수 있으므로 files!! files의 배열형태로 한개든, 여러개든 들어오게 됌
    // 배열로 들어오는 이유 : <input type = "file" multiple/> 일때, 여러개 드래그 가능
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);

    const result = await uploadFile({
      variables: { file: selectedFile },
    });
    console.log(result.data.uploadFile.url, 'url');

    setImageUrl(result.data.uploadFile.url);
  };

  return (
    <>
      {/* multiple : input 속성 중 여러개 선택할 수 있는 것 */}
      <input type="file" onChange={onChangeFile} multiple />
      <Image
        src={`https://storage.googleapis.com/${imageUrl}`}
        width={200}
        height={200}
        alt="구글다운로드사진"
      />
    </>
  );
}
