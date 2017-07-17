export interface Sidebar {
  name: string;
  icon: string;
  items: SidebarItem[];
}

interface SidebarItem {
  name: string;
  url: string;
}
