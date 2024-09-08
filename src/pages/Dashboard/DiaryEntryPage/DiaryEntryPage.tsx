import DiarySearch from "@/components/custom/DiarySearch/DiarySearch";
import DiaryPlayground from "../../../components/custom/DiaryPlayground/DiaryPlayground";

const DiaryEntryPage = () => {
  return (
    <div className="grid grid-flow-row grid-cols-12">
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
