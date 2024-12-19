import React, { useContext } from 'react'
import Logo from './Logo'
import Pattern from './Pattern'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'
import FeedBackItemsContextProvider from './contexts/FeedBackItemsContextProvider'
import { useFeedBackContextProvider } from './contexts/FeedBackItemsContextProvider'

export default function Header() {
  const { onAddToList } = useFeedBackContextProvider()

  return (
    <header className='h-[277px] bg-[#121618] flex flex-col items-center shadow-slate-700 justify-center relative z-[999] pb-[3px]' >
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={onAddToList} />
    </header>
  )
}
