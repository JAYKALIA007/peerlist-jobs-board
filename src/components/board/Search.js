import React from 'react'
import { SearchIcon } from '../../icons/Icons'

export const Search = ({searchQuery, onChange}) => {
  return (
    <div className='flex gap-x-2.5 items-center pb-6 bg-white w-full'>
        <SearchIcon className=''/>
        <input
            type='text'
            placeholder='Search candidates'
            className='outline-none focus:border focus:border-[#E1E4E8] rounded-md w-60'
            value={searchQuery}
            onChange={(e)=>onChange(e.target.value)}
        />
    </div>
  )
}
