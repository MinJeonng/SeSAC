'use client';
// import { Modal } from 'antd';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// 라이브러리의 원리 모르면 해결할 수 없음, 프론트서버에서 Import 안되고 브라우저에서만 되면 아래같이 쓰면된다. 일단 react-quill은 되는데 ㄷ안되는 애들을 위해서
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WebEditorPage() {
  //ReactQuill 만든 사람들이 생성해놓은 onChange 따라서 Event가 들어오는게 아님
  const onChangeContents = (textValue) => {
    // textValue: 현재 에디터의 내용
    console.log(textValue);
  };

  // 백그라운드에서 몰래 받기도 가능. 왜냐면 등록하기때 modal을 받아오면 등록하기 자체가 좀 느려질 수ㅗ 잇어서 하지만 useEffect하려면 전역으로 빼든 그래야함..
  // useEffect(()=>{
  //   const { Modal } = await import('antd');
  // })

  const onsubmit = async (e) => {
    e.preventDefault();
    //버튼을 클릭했을때 그떄 다운받게끔, 아니면 메모리 낭비큼 => code-spliting
    const { Modal } = await import('antd');
    Modal.success({
      content: '임시 게시글이 등록되었습니다.',
      onOk() {},
    });
  };
  return (
    <form onSubmit={onsubmit}>
      작성자 : <input type="text" />
      비밀번호 : <input type="password" />
      제목 : <input type="text" />
      내용 : <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
