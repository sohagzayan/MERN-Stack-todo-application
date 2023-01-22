import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Image from "next/image";
import Layout from "../components/Layout";
import Dashboard from "./dashboard";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Govermant web site" />
        <link rel="icon" href="/favicon.ico" />
        <title>Task Manager</title>
        <link
          rel="shortcut icon"
          href="https://love2dev.com/img/2000px-instagram_logo_2016svg-2000x2000.png"
          type="image/x-icon"
        />
      </Head>
      <Dashboard />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <Layout>{page}</Layout>
    </Provider>
  );
};
