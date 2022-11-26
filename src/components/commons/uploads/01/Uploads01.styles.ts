import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #f5f2fc;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #5729ff;
    color: white;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
