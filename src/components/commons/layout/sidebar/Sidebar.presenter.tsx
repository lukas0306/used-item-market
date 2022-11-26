import * as S from "./Sidebar.styles";
import { Modal } from "antd";
import Point from "../../../units/market/myPage/myPoint/myPoint.container";
import CommonButton from "../../buttons/02/CommonButton";
export default function SidebarUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>MY PAGE</S.Title>
        </S.TitleWrapper>
        <S.UserInfoWRapper>
          <S.UserPhoto
            src={
              props.data?.fetchUserLoggedIn.picture
                ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                : "/images/avatar2.png"
            }
          />
          <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
          <S.UserPoint>
            보유포인트 :{"  "}
            {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
              "ko-KR"
            )}
          </S.UserPoint>
          <CommonButton name="포인트 충전하기" onClick={props.onToglePoint} />
          {props.isPointOpen && (
            <Modal
              visible={true}
              onCancel={props.onToglePoint}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
              mask={true}
            >
              <Point />
            </Modal>
          )}
        </S.UserInfoWRapper>
        <S.MenuWrapper>
          <S.MenuMarket
            onClick={props.onClcikMoveToMyPickList}
            market={props.market}
          >
            찜목록
          </S.MenuMarket>
          <S.MenuBasket
            onClick={props.onClickMoveToMyBasket}
            basket={props.basket}
          >
            장바구니
          </S.MenuBasket>
          <S.MenuPoint onClick={props.onClickMoveToMyPoint} point={props.point}>
            내 포인트
          </S.MenuPoint>
          <S.MenuProfile
            onClick={props.onClickMoveToMyProfile}
            profile={props.profile}
          >
            내 프로필
          </S.MenuProfile>
        </S.MenuWrapper>
      </S.Wrapper>
    </>
  );
}
