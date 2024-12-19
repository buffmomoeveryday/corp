import Container from "@/components/Container";
import FeedBackItemsContextProvider from "@/components/contexts/FeedBackItemsContextProvider";
import Footer from "@/components/Footer";
import HastagList from "@/components/HastagList";
import { FeedbackItemType } from "@/lib/type";

import { useEffect, useMemo, useState } from "react";



export default function Home() {

  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer />

      <FeedBackItemsContextProvider>
        <Container />
        <HastagList />
      </FeedBackItemsContextProvider>

    </div>
  );
}