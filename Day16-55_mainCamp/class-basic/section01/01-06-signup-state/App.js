const App = () => {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  // 이벤트 핸들러 함수 : 이벤트를 다루는 함수
  //handelChangeEmail 이렇게 함수이름을 많이 함
  const onChangeEmail = (e) => {
    console.log(e.target); //작동된 태그
    console.log(e.target.value); //작동된 태그에 입력된 값

    setEmail(e.target.value); //email이 빈문자열인데 내가 입력한 값으로 변경
  };

  const onChangePassword = (e) => {
    setPw(e.target.value);
  };

  const onClickSignUp = (e) => {
    console.log(email);
    console.log(pw);
    if (email.includes('@') === false) {
      // document.getElementById('showError').innerText =
      //   '이메일 형식이 올바르지 않습니다.';
      // return;

      // -> state로 에러 보여주기
      setEmailError('이메일 형식이 올바르지 않습니다.');
    } else {
      alert('회원가입을 축하합니다.');
    }
  };

  return (
    <div className="container">
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      {/* <div id="showError"></div> */}
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  );
};
