import SmallCommonButton from "../../../../commons/buttons/03/SmallCommonButton";
import { Wrapper, Title, PointAmount, Input } from "./myPoint.styles";
import Head from "next/head";
export default function MyPointUI(props: any) {
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
      <Wrapper>
        <Title>포인트충전</Title>
        <PointAmount>
          {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString(
            "ko-KR"
          )}{" "}
          보유중
        </PointAmount>
        <Input
          onChange={props.onChangeMyPoint}
          placeholder="충천할 금액을 입력해주세요."
        />
        <SmallCommonButton name="충전하기" onClick={props.onClickPayment} />
      </Wrapper>
    </>
  );
}
