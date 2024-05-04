import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./layouts/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  )
}
