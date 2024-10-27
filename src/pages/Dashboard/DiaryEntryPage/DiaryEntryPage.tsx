import DiarySearch from "@/components/custom/DiaryComponents/DiarySearch/DiarySearch";
import DiaryPlayground from "../../../components/custom/DiaryComponents/DiaryPlayground/DiaryPlayground";

const DiaryEntryPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <DiarySearch />
      </div>
      <div className="col-span-10">
        <DiaryPlayground />
      </div>
    </div>
  );
};

export default DiaryEntryPage;
