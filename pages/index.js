import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import StructuredData from "utils/hoc/StructredData";

const Intro = dynamic(() => import("containers/intro"), {
  ssr: false,
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    // event schema
    name: "RCA IED 2023, Royal College of Art Information Experience Design Public Event Degree Show 2023",
    startDate: "2023-06-30T12:00-20:00",
    endDate: "2025-07-03T12:00-18:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Royal College of Art",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kensington Gore",
        addressLocality: "South Kensington",
        postalCode: "SW7 2EU",
        addressRegion: "London",
        addressCountry: "UK",
      },
    },
    image: ["https://www.rca-ied-2023.co.uk/assets/posters/1.jpg", "https://www.rca-ied-2023.co.uk/assets/posters/2.jpg", "https://www.rca-ied-2023.co.uk/assets/posters/3.jpg"],
    description: "Royal College of Art's MA Information Experience Design students will present their final projects in the form of a public event, at Royal College of Art Campus in Kensington.",
    performer: {
      "@type": "PerformingGroup",
      name: "Jeanyoon Choi",
    },
    organizer: {
      "@type": "Organization",
      name: "Royal College of Art Information Experience Design",
      url: "https://2023.rca.ac.uk",
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Head>
        <title>RCA IED 2023 || Royal College of Art Information Expereience Design Show Public Event</title>
        <meta name="title" content={"RCA IED 2023"} />

        <meta name="description" content="RCA IED 2023: Royal College of Art Information Expereience Design Show, Public Event" />
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi" />

        <meta property="og:title" content="RCA IED 2023 Show: Royal College of Art Information Experience Design" />
        <meta property="og:description" content="RCA IED 2023 || Royal College of Art Information Experience Design Public Event 2023" />
        <meta property="og:image" content="/icons/android-chrome-512x512.png" />

        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </Head>
      {/* <NextSeo title="RCA IED 2023" description="RCA IED 2023: Royal College of Art Information Expereience Design Show, Public Event MA1 2023" /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <Intro />
      </Suspense>
    </>
  );
}
