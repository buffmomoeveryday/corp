import React from "react";
import HashTagItem from "./HashTagItem";
import { useFeedBackContextProvider } from "./contexts/FeedBackItemsContextProvider";

export default function HastagList() {
  const { uniqueCompanyList: companyList, setSelectedCompany } = useFeedBackContextProvider()
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem key={company} company={company} setSelectedCompany={setSelectedCompany} />
      ))}
    </ul>
  );
}