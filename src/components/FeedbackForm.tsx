import React, { useState } from 'react'

export default function FeedbackForm({ onAddToList, }: { onAddToList: (str: string) => void; }) {


    const [text, setText] = useState<string>("")
    const [showValidIndicator, setShowValidIndicator] = useState<boolean>(false)
    const [showInvalidIndicator, setShowInvalidalidIndicator] = useState<boolean>(false)

    const MAX_COUNT = 150
    const charCount = MAX_COUNT - text.length

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (charCount <= MAX_COUNT) {
            setText(event.target.value)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.includes("#") && text.length > -5) {
            setShowValidIndicator(true)
        } else {
            setShowInvalidalidIndicator(true)
            return
        }
        onAddToList(text);
        setText("");
    };

    return (
        <>
            <form className={`form ${showValidIndicator ? "form--valid" : ""} ${showInvalidIndicator ? "form--invalid" : ""}`} onSubmit={handleSubmit}>
                <label htmlFor="feedback-text">Enter your feedback here, remember to #hastag the company.</label>
                <textarea id="feedback-text" name="" placeholder='' spellCheck={false}
                    onChange={handleChange}
                    value={text}
                    maxLength={MAX_COUNT}
                ></textarea>
                <div>
                    <p className="italic">{charCount}</p>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}
