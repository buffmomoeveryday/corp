import React from 'react'

export default function HashTagItem({ company, setSelectedCompany }: { company: string, setSelectedCompany: (str: string) => void }) {
    return (
        <>
            <li key={company}>

                <button
                    value={company}
                    onClick={(e) => {
                        setSelectedCompany(e.currentTarget.value);
                    }}
                >
                    #{company.toLowerCase()}
                </button>
            </li>
        </>
    )
}
