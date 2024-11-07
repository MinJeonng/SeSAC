'use client';
// import { Modal } from 'antd';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { gql, useMutation } from '@apollo/client';

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

// 라이브러리의 원리 모르면 해결할 수 없음, 프론트서버에서 Import 안되고 브라우저에서만 되면 아래같이 쓰면된다. 일단 react-quill은 되는데 ㄷ안되는 애들을 위해서
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WebEditorPage() {
  const [myFunction] = useMutation(CREATE_BOARD);
  const router = useRouter();
  //ReactQuill 만든 사람들이 생성해놓은 onChange 따라서 Event가 들어오는게 아님
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });
  const onChangeContents = (textValue) => {
    // textValue: 현재 에디터의 내용
    console.log(textValue);
    setValue('contents', textValue); //register로 등록하지 않고 강제로 값 넣어주기
    trigger('contents'); // 값을 넣고 변경을 감지하고 에러처리,검증 같은걸 하려면 필요
  };

  const onsubmit = async (data) => {
    // e.preventDefault(); handleSubmit에서 자동으로 해줌
    const { Modal } = await import('antd');
    console.log(data);
    const result = await myFunction({
      variables: {
        createBoardInput: {
          ...data, //스프레드 연산자로 줄일 수 있음
          // writer: data.writer,
          // password: data.password,
          // title: data.title,
          // contents: data.contents,
        },
      },
    });

    const boardId = result.data.createBoard._id;
    Modal.success({
      content: '임시 게시글이 등록되었습니다.',
      onOk() {
        router.push(`/section30/30-02-web-editor-hook-form/${boardId}`);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      작성자 : <input type="text" {...register('writer')} />
      <br />
      비밀번호 : <input type="password" {...register('password')} />
      <br />
      제목 : <input type="text" {...register('title')} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
