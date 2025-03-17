import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div>App Name</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<a href="">home</a>
					<a href="">home</a>
					<a href="">home</a>
					<a href="">home</a>
				</SidebarGroup>
				<SidebarGroup>
					<a href="">home</a>
					<a href="">home</a>
					<a href="">about us</a>
					<a href="">home</a>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>footer</SidebarFooter>
		</Sidebar>
	);
}
