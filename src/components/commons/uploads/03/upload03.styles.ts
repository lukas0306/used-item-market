import styled from "@emotion/styled";

export const UploadButton = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;

  :hover {
    background-color: #5729ff;
    color: white;
  }
`;

export const UploadImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  cursor: pointer;
`;
export const UploadImageHidden = styled.input`
  display: none;
`;
