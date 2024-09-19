const InputFunc = (pracProps) => {
  console.log(pracProps.info);
  console.log(pracProps);
  console.log(pracProps.bag);
  console.log(pracProps.fruit);
  const firstMsg = '비밀번호를 입력하세요';

  // 어차피 babel이 진짜 html로 바꿔줌
  return <input type="text" placeholder={firstMsg} />;
};
