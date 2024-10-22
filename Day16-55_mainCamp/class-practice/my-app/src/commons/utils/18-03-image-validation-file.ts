import { Modal } from 'antd';

const CheckValidationFile = (selectedFile?: File) => {
  // 파일 선택되지 않았을때 로직 처리
  if (typeof selectedFile === 'undefined') {
    Modal.error({
      title: '오류',
      content: '파일이 없습니다.',
    });
    return;
  }
  //백엔드에서 로직처리를 해야하지만, 불필요한 서버가 왔다갔다 너무 많으니까 그전에 프론트에서 막자
  if (selectedFile.size > 1024 * 1024 * 5) {
    Modal.warn({
      title: '경고',
      content: '파일 용량이 너무 큽니다.(제한 : 5MB)',
    });
    // 이렇게만 되면 onChangeFile은 계속 진행되게되니까.
    // 그래서 이걸 boolean 값으로 전해주는 것
    return false;
  }

  //확장자 막기
  if (
    !selectedFile.type.includes('jpeg') &&
    !selectedFile.type.includes('png')
  ) {
    Modal.warn({
      title: '경고',
      content: 'png 또는 jpeg 파일만 업로드 가능합니다.',
    });
    return false;
  }

  return true;
};

export { CheckValidationFile };
