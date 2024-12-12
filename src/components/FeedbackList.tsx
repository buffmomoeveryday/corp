import React from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList() {
  const feedbackItem = [
    {
      upVoteCount: 593,
      badgeLetter: "b",
      companyName: "KFC",
      text: "text",
      daysAgo: 123,
    },
    {
      upVoteCount: 593,
      badgeLetter: "b",
      companyName: "KFC",
      text: "text",
      daysAgo: 123,
    },
    {
      upVoteCount: 593,
      badgeLetter: "b",
      companyName: "KFC",
      text: "text",
      daysAgo: 123,
    },


  ]

  return (
    <>
      <ol className="feedback-list">
        <FeedbackItem />
      </ol>
    </>
  )
}
