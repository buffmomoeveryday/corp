import React, { useEffect, useState } from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'

export default function FeedbackList() {

  interface FeedbackItemType {
    upvoteCount: number
    badgeLetter: string
    company: string
    text: string
    daysAgo: number
  }



  const [feedbackItem, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    const getFeedbackItems = async () => {
      try {
        const res = await fetch('https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks');

        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
        setLoading(false)
      } catch (error) {
        setError('Something Went Wrong')
        setLoading(false)
      }

    };
    getFeedbackItems();
  }, []);

  // const feedbackItem = [
  //   {
  //     upVoteCount: 593,
  //     badgeLetter: "b",
  //     companyName: "KFC",
  //     text: "text",
  //     daysAgo: 123,
  //   },
  //   {
  //     upVoteCount: 593,
  //     badgeLetter: "b",
  //     companyName: "KFC",
  //     text: "text",
  //     daysAgo: 123,
  //   },
  //   {
  //     upVoteCount: 593,
  //     badgeLetter: "b",
  //     companyName: "KFC",
  //     text: "text",
  //     daysAgo: 123,
  //   },


  // ]

  return (


    <ol className="feedback-list">

      {error}

      {isLoading ? (<Spinner />) : (
        feedbackItem.map((item, index) => (
          <FeedbackItem
            key={index}
            upvoteCount={item.upvoteCount}
            badgeLetter={item.badgeLetter}
            company={item.company}
            text={item.text}
            daysAgo={item.daysAgo}
          />
        )
        )
      )}

      {/* 
      {feedbackItem.map((item, index) => (
        <FeedbackItem
          key={index}
          upvoteCount={item.upvoteCount}
          badgeLetter={item.badgeLetter}
          company={item.company}
          text={item.text}
          daysAgo={item.daysAgo}
        />
      )
      )} */}
    </ol>
  );
}
