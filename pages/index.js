import * as React from "react";
import { Footer, Hero, Navbar, Showcase, UpcomingEvents } from "../components";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import ProTip from "../src/ProTip";
// import Link from "../src/Link";
// import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Showcase type="poweredBy" />
      <Showcase type="communityPartners" />
      <Footer />
    </>
  );
}
