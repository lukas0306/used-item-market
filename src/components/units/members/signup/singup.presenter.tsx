import * as S from "./singup.styles";
export default function SignupUIPage(props: any) {
  return (
    <>
      <S.SignupWrapper>
        <S.SignupHeader>
          <S.SingupHeaderTitle>회원가입</S.SingupHeaderTitle>
          <S.RequiredWrapper>
            <S.Required>*</S.Required>
            <S.RequiredFields>필수 입력사항</S.RequiredFields>
          </S.RequiredWrapper>
        </S.SignupHeader>
        <S.SingupContainer>
          <S.TitleWrapper>
            <S.Title>이메일</S.Title>
            <S.Required>*</S.Required>
          </S.TitleWrapper>
          <S.InputBox
            type="text"
            placeholder=" 예시: example@sol.com"
            name="email"
            onChange={props.onChangeInputs}
          />

          <S.TitleWrapper>
            <S.Title>이름</S.Title>
            <S.Required>*</S.Required>
          </S.TitleWrapper>
          <S.InputBox
            type="text"
            placeholder=" 이름을 입력해주세요."
            name="name"
            onChange={props.onChangeInputs}
          />

          {/* <S.TitleWrapper>
            <S.Title>핸드폰 번호</S.Title>
          </S.TitleWrapper>
          <S.InputBox
            type="text"
            placeholder=" -를 제외한 숫자만 입력해주세요."
            name="phoneNumber"
            onChange={props.onChangeInputs}
          /> */}

          <S.TitleWrapper>
            <S.Title>비밀번호</S.Title>
            <S.Required>*</S.Required>
          </S.TitleWrapper>
          <S.InputBox
            type="password"
            placeholder=" 비밀번호를 입력해주세요."
            name="password"
            onChange={props.onChangeInputs}
          />

          {/* <S.TitleWrapper>
            <S.Title>비밀번호 확인</S.Title>
            <S.Required>*</S.Required>
          </S.TitleWrapper>
          <S.InputBox
            type="password"
            placeholder=" 비밀번호를 한 번 더 입력해주세요."
            name="password2"
            onChange={props.onChangeInputs}
          /> */}
          <br />
          {/* 주소검색도 가져와서 주소 넣기 */}
          <S.SignupButton onClick={props.onClickSignup}>
            가입하기
          </S.SignupButton>
        </S.SingupContainer>
      </S.SignupWrapper>
    </>
  );
}
