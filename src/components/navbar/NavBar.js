import React from 'react'
import { CubeIcon, HomeIcon, InboxIcon, JobIcon, NetworkIcon, SearchIcon } from '../../icons/Icons'
import { NavItem } from './NavItem'
import { NavHeader } from './NavHeader'
import { AdminUserImage, LoomIcon } from './helpers'
import { NavFooter } from './NavFooter'

export const NavBar = () => {
  return (
    <div className='border-r-[1px] border-[#E1E4E8] col-span-1 px-6 py-4  h-full flex flex-col justify-between text-sm'>
        <div>
          <NavHeader />
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2' >
              <NavItem  icon={<HomeIcon/>} label={'Scroll'} />
              <NavItem  icon={<CubeIcon/>} label={'Projects'} />
              <NavItem  icon={<InboxIcon/>} label={'Inbox'} />
              <NavItem  icon={<JobIcon/>} label={'Jobs'} />
              <NavItem  icon={<SearchIcon/>} label={'Search'} />
              <NavItem  icon={<NetworkIcon/>} label={'My Network'} />
            </div>
            <div className='flex flex-col gap-3' >
              <NavItem  icon={ <AdminUserImage /> } label={'Yogini'} />
              <NavItem  icon={<LoomIcon/>} label={<LoomLabel />} />
            </div>
          </div>
        </div>
        <NavFooter /> 
    </div>
  )
}

const LoomLabel = () => {
  return(
    <div className='flex flex-col' >
      <div>Loom</div>
      <div className='text-[10px]' >Manage jobs, teams, & more →</div>
    </div>
  )
}
