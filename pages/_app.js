import { useEffect } from "react";
import "../styles/globals.css";
import store from "../store/store";
import Layout from "../components/Layout";
import loginAction from "../store/action/loginAction";
import { useRouter } from "next/router";
import "remixicon/fonts/remixicon.css";

import { Provider, useDispatch, useSelector } from "react-redux";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      {" "}
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
