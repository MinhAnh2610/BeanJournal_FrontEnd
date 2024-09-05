import Sidebar from "@/components/custom/Sidebar";
import { Card, Skeleton } from "@nextui-org/react";

const Dashboard = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Sidebar />
      <section className="flex flex-col p-10 w-full gap-5">
        <div className="flex flex-col gap-3 h-60">
          <Card className="space-y-5 p-4 h-full" radius="lg">
            <Skeleton isLoaded className="rounded-lg">
              <div className="h-24 rounded-lg bg-secondary-100"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton isLoaded className="w-3/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
              </Skeleton>
              <Skeleton isLoaded className="w-4/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
              </Skeleton>
              <Skeleton isLoaded className="w-2/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-400"></div>
              </Skeleton>
              <Skeleton isLoaded className="w-3/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-500"></div>
              </Skeleton>
            </div>
          </Card>
        </div>
        <div>
          <p className="text-lg text-gray-500 font-semibold">Recently visited</p>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
