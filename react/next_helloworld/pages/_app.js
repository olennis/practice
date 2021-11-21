import "../styles/globals.css";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  //component는 현재 페이지를 의미, pageProps 데이터 페칭 메소드를 통해 가져온 객체
  return (
    <div>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;

// 레이아웃을 만드려면 _app.js를 이용
// 페이지 전환시 레이아웃을 유지할 수 있음
// 모든 페이지는 이곳을 통함
// 페이지 전환시 상태값 유지 가능
// 글로벌 css 선언
