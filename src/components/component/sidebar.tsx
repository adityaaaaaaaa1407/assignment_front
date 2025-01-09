"use client";

import { FaChartSimple } from "react-icons/fa6";
import { TfiMedallAlt } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
const Sidebar = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.Sidebar),
  { ssr: false }
);
const SidebarContent = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarContent),
  { ssr: false }
);
const SidebarGroup = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarGroup),
  { ssr: false }
);
const SidebarGroupContent = dynamic(
  () =>
    import("@/components/ui/sidebar").then((mod) => mod.SidebarGroupContent),
  { ssr: false }
);
const SidebarGroupLabel = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarGroupLabel),
  { ssr: false }
);
const SidebarMenu = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarMenu),
  { ssr: false }
);
const SidebarMenuButton = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarMenuButton),
  { ssr: false }
);
const SidebarMenuItem = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarMenuItem),
  { ssr: false }
);

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: <FaChartSimple />,
  },
  {
    title: "Skill Test",
    url: "/skills",
    icon: <TfiMedallAlt />,
  },
  {
    title: "Internship",
    url: "/internship",
    icon: <GrDocument />,
  },
];
const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-extrabold text-black mb-28 mt-6 ml-2 ">
            <span>WhatBytes</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton asChild className="mb-8  ml-4">
                    <Link href={item.url}>
                      <span className="text-lg">{item?.icon}</span>
                      <span
                        className={`text-lg font-bold ${
                          pathname === item.url
                            ? "text-blue-700"
                            : "text-gray-800 hover:text-blue-700"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
