import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Logo() {
    return (
        <>
            <Link href={"/"}>
                <Image src={"/logo.png"} alt='logo' height={27} width={27} className='h-[27.5]' />
            </Link>
            <div>Logo</div>
        </>
    )
}
