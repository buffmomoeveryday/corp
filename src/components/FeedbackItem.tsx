import { TriangleUpIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function FeedbackItem({ upvoteCount, badgeLetter, company, text, daysAgo }: {
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string;
    daysAgo: number;
}) {
    return (
        <li className="feedback">
            <button>
                <TriangleUpIcon />
                <span>{upvoteCount}</span>
            </button>
            <div>
                <p>{badgeLetter}</p>
            </div>
            <div>
                <p>{company}</p>
                <p>
                    {text}
                </p>
            </div>
            <p>{daysAgo}</p>
        </li>
    )
}
