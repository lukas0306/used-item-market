import * as S from "./login.styles";

export default function LoginPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.BackgroundImg src="/images/bgimg3.webp" />
        <S.WrapperBody>
          <S.ExitBtn onClick={props.MoveHome}></S.ExitBtn>
          <S.LoginForm>
            <S.Login>로그인</S.Login>
            <S.UserEmail
              type="text"
              placeholder="email"
              name="email"
              onChange={props.onChangeMyEmail}
            />
            <br />
            <S.Password
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={props.onChangeMyPassword}
              onKeyPress={props.onPressEnter}
            />
            <br />

            <S.LoginButton onClick={props.Login}>로그인</S.LoginButton>

            <S.Line></S.Line>

            <S.LoginBot>
              <S.SignupWrapper>
                <S.Signup onClick={props.MoveSignup}>회원가입</S.Signup>
              </S.SignupWrapper>
              <div></div>
              <S.HomeWrapper>
                <S.Home onClick={props.MoveHome}>HOME</S.Home>
              </S.HomeWrapper>
            </S.LoginBot>
            <S.Find>ID찾기</S.Find>
            <S.Find>비밀번호 찾기</S.Find>
          </S.LoginForm>
        </S.WrapperBody>
      </S.Wrapper>
    </>
  );
}
