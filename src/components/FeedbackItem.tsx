import { TriangleUpIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function FeedbackItem({ upVoteCount, badgeLetter, companyName, text, daysAgo }: {
    upVoteCount: number;
    badgeLetter: string;
    companyName: string;
    text: string;
    daysAgo: number;
}) {
    return (
        <li className="feedback">
            <button>
                <TriangleUpIcon />
                <span>{upVoteCount}</span>
            </button>
            <div>
                <p>{badgeLetter}</p>
            </div>
            <div>
                <p>{companyName}</p>
                <p>
                    {text}
                </p>
            </div>
            <p>{daysAgo}</p>
        </li>
    )
}
