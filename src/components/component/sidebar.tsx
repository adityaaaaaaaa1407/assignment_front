"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaChartSimple } from "react-icons/fa6";
import { TfiMedallAlt } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";
import { usePathname } from "next/navigation";

// Menu items.
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
                    <a href={item.url}>
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
                    </a>
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
