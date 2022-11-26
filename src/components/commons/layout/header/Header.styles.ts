import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 20px;
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  padding-left: 100px;
  margin: auto 0;
`;

export const HomeWrapper = styled.div`
  display: flex;
  :hover {
    cursor: pointer;
  }
`;
export const HomeName = styled.h2`
  font-size: 30px;
  color: #5729ff;
`;
export const HomeIcon = styled.img`
  width: 50px;
  height: 50px;
`;
export const HeaderCenter = styled.div`
  width: 300px;
  /* display: flex;
  justify-content: space-between; */
  margin: auto 0;
`;
export const BoardName = styled.span`
  padding-right: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const HeaderRight = styled.div`
  padding-right: 40px;
  margin: auto 0;
`;
export const UserInfo = styled.div`
  padding-right: 40px;
  margin: auto 0;
`;
export const UserName = styled.span`
  /* color: #4287f5; */
  font-weight: bold;
  font-size: 20px;
`;
export const Welcome = styled.span`
  margin-right: 10px;
  font-size: 15px;
`;
export const Login = styled.span`
  width: 84px;
  height: 28px;
  margin-right: 15px;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const Logout = styled.button`
  width: 84px;
  height: 28px;
  margin-right: 15px;
  font-size: 15px;
  :hover {
    cursor: pointer;
    background-color: #e6e1f2;
  }
  border-radius: 10px;
`;
export const Space = styled.span`
  margin-right: 15px;
`;
// export const Header = styled.div`
//   height: 152px;
//   /* background-color: #21dfb6; */
//   display: flex;
//   justify-content: space-around;
// `;

// export const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 150px;
//   /* background-color: black; */
// `;

// export const HeaderLeft = styled.div`
//   padding-top: 15px;
// `;

// export const Button = styled.button`
//   width: 84px;
//   height: 28px;
//   margin: 10px;
//   font-size: 10px;
//   background-color: white;
//   border-radius: 10px;
//   color: black;
//   :hover {
//     background-color: #de9ba1;
//   }
// `;
