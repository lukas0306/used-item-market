import Head from "next/head";
import * as S from "./MyPage.styles";
export default function MyPageUI(props: any) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {/* <input type="text" /> */}
      <S.MyPageWrapper>
        <S.ContentsWrapper>
          <S.ProfileBox>
            <S.UserPhoto
              src={
                props.data?.fetchUserLoggedIn.picture
                  ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                  : "/images/avatar2.png"
              }
            />
            <S.UserName>{props.data?.fetchUserLoggedIn.name}님</S.UserName>
            <S.ContentsTitle>환영합니다.</S.ContentsTitle>
          </S.ProfileBox>
          <S.ContentsBox onClick={props.onClickMoveToMyPoint}>
            <S.ContentsTitle>내 포인트</S.ContentsTitle>
            <S.Contents>
              {props.data?.fetchUserLoggedIn.userPoint?.amount}원
            </S.Contents>
          </S.ContentsBox>
          <S.ContentsBox>
            <S.ContentsTitle>내가 산 상품</S.ContentsTitle>

            <S.Contents>
              {props.dataIBought?.fetchUseditemsCountIBought}개
            </S.Contents>
          </S.ContentsBox>
          <S.ContentsBox>
            <S.ContentsTitle>내가 판 상품</S.ContentsTitle>

            <S.Contents>
              {props.dataISold?.fetchUseditemsCountISold}개
            </S.Contents>
          </S.ContentsBox>
        </S.ContentsWrapper>
      </S.MyPageWrapper>
    </>
  );
}
