import { ReactChild } from "react";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./Navigation/Navigation.container";
import Sidebar from "./sidebar/Sidebar.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* background-color: black; */
`;
const Body = styled.div`
  width: 100%;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const HIDDEN_HEADERS = ["/boards/login"];
const HIDDEN_BANNERS = ["/", "/boards/login"];
const HIDDEN_NAVS = ["/"];
const HIDDEN_FOOTERS = ["/", "/boards/login"];
const HIDDEN_SIDEBARS = ["/", "/boards/login", "/boards"];

interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isBanners = HIDDEN_BANNERS.includes(router.asPath);
  const isNavs = HIDDEN_NAVS.includes(router.asPath);
  const isFooters = HIDDEN_FOOTERS.includes(router.asPath);
  const isSidebars = HIDDEN_SIDEBARS.includes(router.asPath);
  //asPath 주소값

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      {/* {!isBanners && <Banner />} */}
      {!isNavs && <Navigation />}
      <BodyWrapper>
        {!isSidebars && <Sidebar />}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isFooters && <Footer />}
    </Wrapper>
  );
}
