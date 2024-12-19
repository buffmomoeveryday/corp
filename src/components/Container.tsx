import React from "react";
import Header from "./Header";
import FeedbackList from "./FeedbackList";
import { FeedbackItemType } from "@/lib/type";
import { useFeedBackContextProvider } from "./contexts/FeedBackItemsContextProvider";

export default function Container() {

  // const { errorMessage, isLoading, feedbackItems } = useFeedBackContextProvider()


  return (
    <div className="w-[715px] h-full rounded-md overflow-hidden animate-[intro_0.4s]">
      <Header />
      <FeedbackList />
    </div>
  );
}