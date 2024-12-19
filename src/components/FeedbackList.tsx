import React from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { FeedbackItemType } from "@/lib/type";
import { useFeedBackContextProvider } from "./contexts/FeedBackItemsContextProvider";

type FeedbackListProps = {
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: FeedbackItemType[];
};

export default function FeedbackList() {

  const { isLoading, errorMessage, filteredFeedBackItems: feedbackItems } = useFeedBackContextProvider()


  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
}