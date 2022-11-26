import * as S from "./productregister.styles";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./productregister.validation";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductRegisterUI(props: any) {
  const { handleSubmit, register, setValue, trigger, formState, getValues } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  //리액트 퀼 태그표시부분 제거

  // function handleChange(value: string) {
  //   setValue("contents", value === "<p><br><p>" ? "" : value);
  //   trigger("contents");
  // }
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품수정" : "상품등록"}</S.Title>
        <form
          onSubmit={
            props.isEdit
              ? handleSubmit(props.onClickUpdate)
              : handleSubmit(props.onClickSubmit)
          }
        >
          상품명:
          <S.Inputs
            type="text"
            placeholder="상품명을 입력해주세요."
            {...register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
          한줄요약:
          <S.Inputs
            type="text"
            placeholder="한줄요약을 입력해주세요."
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <S.ErrorMessage>{formState.errors.remarks?.message}</S.ErrorMessage>
          상품 설명:
          <S.Inputs 
            type="text"
            placeholder="상품 설명을 입력해주세요."
            {...register("contents")}
            defaultValue={props.data?.fetchUseditem.contents}
          />
          <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage>
          {/* {props.isEdit ? (
            <S.Contents
              onChange={handleChange}
              value={
                getValues("contents") ||
                props.data?.fetchUseditem.contents ||
                ""
              }
            />
          ) : (
            <S.Contents onChange={handleChange} />
          )} */}
          {/* <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage> */}
          <div>가격:</div>
          <S.Price
            type="text"
            placeholder="가격을 입력해주세요."
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <S.ErrorMessage>{formState.errors.price?.message}</S.ErrorMessage>
          <S.Transaction>사진등록</S.Transaction>
          <div>
            {props.fileUrls.map((el: any, index: any) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </div>
          
          <S.Transaction>거래 장소</S.Transaction>
          <Button onClick={props.showModal}>주소 검색</Button>
          <S.Address
            value={
              props.myAddress ||
              props.data?.fetchUseditem.useditemAddress?.address ||
              ""
            }
            onChange={() => {}}
          />
          <div>우편번호</div>
          <S.Zipcode
            value={
              props.myZonecode ||
              props.data?.fetchUseditem.useditemAddress?.zipcode ||
              ""
            }
            onChange={() => {}}
          />
          <S.KakaoMap id="map" ></S.KakaoMap>
          {props.isOpen && (
            <Modal
              visible={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <DaumPostcode onComplete={props.handleComplete} />;
            </Modal>
          )}
          <div></div>
          <S.ButtonWrapper>
            <S.SubmitButton type="submit" name="등록하기">
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
