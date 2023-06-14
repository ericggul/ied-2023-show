import Head from "next/head";
import { NextSeo } from "next-seo";

import dynamic from "next/dynamic";
const Events = dynamic(() => import("containers/events"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>RCA IED 2023 || Royal College of Art Information Expereience Design Public Event</title>
        <meta name="title" content={"RCA IED 2023"} />

        <meta name="description" content="RCA IED 2023: Royal College of Art Information Expereience Design Public Event" />
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo title="RCA IED 2023" description="RCA IED 2023: Royal College of Art Information Expereience Design Public Event MA1 2023" />

      <Events />
    </>
  );
}
