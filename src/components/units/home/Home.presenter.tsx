import * as S from "./Home.styles";
import Typewriter from "typewriter-effect";
export default function HomeUI() {
  return (
    <>
      <S.Wrapper>
        <S.Body>
          <S.BodyImg src="/images/geeks.jpg" />
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter

                .typeString(
                  " <h2>안녕하세요. <br/><br/> 프론트엔드 개발자 <strong>김한솔 </strong> 입니다. </h2>"
                )

                .pauseFor(1000)

                .start();
            }}
          />
        </S.Body>
      </S.Wrapper>
    </>
  );
}
