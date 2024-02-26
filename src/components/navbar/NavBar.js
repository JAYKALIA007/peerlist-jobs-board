import React from "react";
import {
  CubeIcon,
  HomeIcon,
  InboxIcon,
  JobIcon,
  NetworkIcon,
  SearchIcon,
} from "../../icons/Icons";
import { NavItem } from "./NavItem";
import { NavHeader } from "./NavHeader";
import { AdminUserImage, LoomIcon } from "./helpers";
import { NavFooter } from "./NavFooter";

export const NavBar = () => {
  return (
    <div className="col-span-1 flex h-full lg:flex-col justify-between border-r-[1px] border-[#E1E4E8] px-6 py-4 text-sm">
      <div>
        <NavHeader />
        <div className="flex lg:flex-col gap-6">
          <div className="flex lg:flex-col gap-2">
            <NavItem
              icon={<HomeIcon />}
              label={<span className="font-semibold">Scroll</span>}
              showLabel={true}
            />
            <NavItem icon={<CubeIcon />} label={"Projects"} showLabel={true}/>
            <NavItem icon={<InboxIcon />} label={"Inbox"} showLabel={true}/>
            <NavItem icon={<JobIcon />} label={"Jobs"} showLabel={true}/>
            <NavItem icon={<SearchIcon />} label={"Search"} showLabel={true}/>
            <NavItem icon={<NetworkIcon />} label={"My Network"} showLabel={true}/>
          </div>
          <div className="flex lg:flex-col gap-3">
            <NavItem icon={<AdminUserImage />} label={"Yogini"} showLabel={false}/>
            <NavItem icon={<LoomIcon />} label={<LoomLabel />} showLabel={false}/>
          </div>
        </div>
      </div>
      <NavFooter />
    </div>
  );
};

const LoomLabel = () => {
  return (
    <div className="flex flex-col">
      <div>Loom</div>
      <div className="text-[10px]">Manage jobs, teams, & more →</div>
    </div>
  );
};
