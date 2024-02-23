import React from 'react'
import { DownArrowIcon, GroupIcon, LinkIcon, PeerlistLogo, PencilIcon, ShareIcon } from '../../icons/Icons'
import { JobPostedByImage } from './helpers'

export const JobHeader = () => {
  return (
    <div className='w-full bg-[#FAFBFC] flex items-start px-6 py-10 gap-x-4 border-b-[1px] border-[#E1E4E8]' >
        <div className='p-2 border border-[#E1E4E8] rounded-2xl' >
            <PeerlistLogo />
        </div>
        <div className='flex items-center w-full' >
            <div className='flex flex-col gap-5 w-full' >
                <div className='flex justify-between' >
                    <div>
                        <div className='flex items-center gap-2' >
                            <div className='text-lg font-semibold' >Software Engineer, Front End</div>
                            <DownArrowIcon />
                        </div>
                        <div className='text-sm' >at Peerlist <em>•</em> Full time <em>•</em> Remote (United States, Canada)</div>
                    </div>
                    <div className='flex gap-x-2.5 h-fit'>
                        <div className='border border-[#D1D5DA] p-1 rounded-full' >
                            <PencilIcon />
                        </div>
                        <div className='border border-[#D1D5DA] p-1 rounded-full' >
                            <ShareIcon />
                        </div>
                        <div className='border border-[#D1D5DA] p-1 rounded-full' >
                            <LinkIcon />
                        </div>
                        <div className='border border-[#D1D5DA] p-1 rounded-full' >
                            <GroupIcon />
                        </div>
                    </div>
                </div>
                    <div className='flex justify-between'>
                        <div className='flex text-xs gap-4 w-full'>
                            <div>
                                <span  className=' font-semibold pr-[2px]'>78</span>
                                <span>Candidates</span>
                            </div>
                            <div>
                                <span  className=' font-semibold pr-[2px]'>68</span>
                                <span>Applied w/ Peerlist</span>
                            </div>
                            <div>
                                <span  className=' font-semibold pr-[2px]'>2872</span>
                                <span>Views</span>
                            </div>
                        </div>
                        <div className='flex text-xs gap-4 w-full justify-end'>
                            <div>
                                <span>Posted</span>
                                <span  className=' font-semibold pl-[2px]'>1d ago</span>
                            </div>
                            <div className='flex items-start gap-x-[2px]' >
                                <span>by</span>
                                <JobPostedByImage />
                                <span  className=' font-semibold pl-[2px]'>Akash Bhadange</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
