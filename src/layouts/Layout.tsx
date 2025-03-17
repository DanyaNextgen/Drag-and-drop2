import { AppSidebar } from "@/components/custom/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="w-full p-4">
					<SidebarTrigger />
					<Outlet />
				</main>
			</SidebarProvider>
		</>
	);
};

export default Layout;
