import { SidebarDemo } from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen">
      <SidebarDemo children={children} />
    </main>
  );
};

export default DashboardLayout;
