import { TriangleUpIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export default function FeedbackItem({ upvoteCount, badgeLetter, company, text, daysAgo }: {
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string;
    daysAgo: number;
}) {

    const [open, setOpen] = useState(false)
    return (
        <li className={`feedback  ${open ? "feedback--expand" : ""}`}
            onClick={() => open === true ? setOpen(false) : setOpen(true)}
        >
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
