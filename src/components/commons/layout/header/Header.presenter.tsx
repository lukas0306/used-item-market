import * as S from "./Header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
export default function HeaderUI(props: any) {
  const { moveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderLeft>
          <S.HomeWrapper onClick={moveToPage("/")}>
            {/* <S.HomeIcon src="/images/heart.png" /> */}
            <S.HomeName>Sol's Home</S.HomeName>
          </S.HomeWrapper>
        </S.HeaderLeft>
        <S.HeaderCenter>
          <S.BoardName onClick={moveToPage("")}>PROFILE</S.BoardName>
          <S.BoardName onClick={moveToPage("/boards")}>BOARD</S.BoardName>
          <S.BoardName onClick={moveToPage("/market")}>MARKET</S.BoardName>
          <S.BoardName onClick={moveToPage("/mypage")}>MYPAGE</S.BoardName>
        </S.HeaderCenter>
        {props.data?.fetchUserLoggedIn ? (
          <S.UserInfo>
            <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
            <S.Welcome> 님 </S.Welcome>
            <S.Logout onClick={props.logout}>로그아웃</S.Logout>
          </S.UserInfo>
        ) : (
          <S.HeaderRight>
            <S.Login onClick={props.MoveLogin}>로그인</S.Login>
            <S.Space>|</S.Space>
            <S.Login onClick={props.MoveSignup}>회원가입</S.Login>
          </S.HeaderRight>
        )}
      </S.Header>
    </S.Wrapper>

    // <Header>
    //   <HeaderLeft>
    //     <div>지역: {props.cityName}</div>
    //     <div>날씨: {props.weatherMain}</div>
    //     <div>온도: {props.getTemp(props.temp)}</div>
    //   </HeaderLeft>
    // </Header>
  );
}
