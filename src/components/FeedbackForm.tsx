import React from 'react'

export default function FeedbackForm() {
    return (
        <>
            <form className={"form"}>
                <textarea id="feedback-text" name="" placeholder='' spellCheck={false}></textarea>
                <label htmlFor="feedback-text">Enter your feedback here, remember to #hastag the company.</label>
                <div>
                    <p className="italic">150</p>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}
