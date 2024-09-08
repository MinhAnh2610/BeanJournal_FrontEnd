import React, { useEffect } from "react";

type Props = {};

const DiaryEntryPage = (props: Props) => {
  useEffect(() => {
    console.log("DiaryEntryPage");
  });
  return <div className="flex flex-col p-14 w-full gap-10">DiaryEntryPage</div>;
};

export default DiaryEntryPage;
