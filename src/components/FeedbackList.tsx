import React from 'react'

export default function FeedbackList() {
  return (
    <>
      <ol className="feedback-list">
        <li className="feedback">
          <button>
            {/* <TriangleUpIcon from radix ui/> */}
            <span>593</span>
          </button>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisi
              Consequuntur dolores dolorum enim architecto i
            </p>
          </div>
          <p>4d</p>
        </li>
      </ol>
    </>
  )
}
