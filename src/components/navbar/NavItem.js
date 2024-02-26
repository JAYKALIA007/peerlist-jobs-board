import React from 'react'

export const NavItem = ({icon, label, showLabel}) => {
  return (
    <div className='flex items-center gap-x-3 pt-2 cursor-pointer' >
        {icon}
        <div className={`${!showLabel && 'hidden'} lg:block`}>{label}</div>
    </div>
  )
}
