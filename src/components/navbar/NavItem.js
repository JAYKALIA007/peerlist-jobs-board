import React from 'react'

export const NavItem = ({icon, label}) => {
  return (
    <div className='flex items-center gap-x-3 pt-2' >
        {icon}
        <div>{label}</div>
    </div>
  )
}
