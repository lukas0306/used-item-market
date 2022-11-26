import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeMyWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <S.Error>{props.myWriterError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password type="password" onChange={props.onChangeMyPassword} />
          <S.Error>{props.myPasswordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeMyTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.myTitleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeMyContents}
          defaultValue={props.data?.fetchBoard.contents}
        />

        <S.Error>{props.myContentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode
            value={
              props.myZonecode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
          />

          <Button onClick={props.onToggleModal}>주소 검색</Button>
        </S.ZipcodeWrapper>
        <S.Address
          value={
            props.myAddress ||
            props.data?.fetchBoard.boardAddress?.address ||
            ""
          }
        />

        <S.AddressDetail
          onChange={props.onChangeMyAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ""
          }
        ></S.AddressDetail>
        {props.isOpen && (
          <Modal
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
          >
            <DaumPostcode onComplete={props.handleComplete} />;
          </Modal>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeMyYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        {props.myImages.map((el) => (
          <S.ImgBox key={el} src={`https://storage.googleapis.com/${el}`} />
        ))}
        <input
          style={{ display: "none" }}
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
        />
        <S.UploadButton onClick={props.onClickMyImage}>
          <>+</>
          <>Upload</>
        </S.UploadButton>
        {/* <S.UploadButton>
          <>+</>
          <>Upload</>
        </S.UploadButton>
        <S.UploadButton>
          <>+</>
          <>Upload</>
        </S.UploadButton> */}
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          disabled={props.isEdit ? false : !props.isActive}
          isActive={props.isEdit ? true : !props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

// {props.isEdit ? defaultValue={props.data?.fetchBoard.boardAddress.zipcode}
//   : props.myZonecode}

// {props.isEdit ? defaultValue={props.data?.fetchBoard.boardAddress.address}
//   : props. myAddress}
