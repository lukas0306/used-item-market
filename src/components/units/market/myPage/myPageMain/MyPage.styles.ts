import styled from "@emotion/styled";

export const MyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const ContentsWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 40%;
  display: flex;
  background-color: #efefef;
`;
export const UserName = styled.h1`
  margin: 40px;
`;

export const UserPhoto = styled.img`
  margin-left: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const ProfileBox = styled.div`
  width: 40%;
  height: 80%;
  background-color: white;
  border: 1px solid black;
  margin: 50px 10px 0px 10px;
  display: flex;
  align-items: center;
`;
export const ContentsBox = styled.div`
  width: 20%;
  height: 80%;
  background-color: white;
  /* border: 1px solid black; */
  margin: 50px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const ContentsTitle = styled.h1`
  margin-left: 40px;
`;
export const Contents = styled.h1`
  margin: 40px;
  color: #5729ff;
`;
