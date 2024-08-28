function registerFunc() {
  const email = document.getElementById('email').value;

  //이메일 * 표시
  const dash = email.split('@');
  const authEmail = dash[0];
  //dash[0]의 끝에서부터 4개 *
  const fourString = dash[0].slice(-4);
  const headString = dash[0].slice(0, -5);
  console.log(headString);

  const authEmail_1 = fourString.length;
  console.log(authEmail_1);
  const changeEmail = '*'.repeat(authEmail_1);
  console.log(changeEmail);

  const result_email = authEmail + changeEmail + '@' + dash[1];
  alert(`회원가입을 축하합니다. 가입하신 이메일은 ${result_email}입니다.`);
  // 나중에 버튼 누르면 초기화되눈거
  // 모든 값을 입력해야 버튼 실행되는건 안함
}
