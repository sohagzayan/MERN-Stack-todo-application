import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Dashboard from './dashboard';

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
