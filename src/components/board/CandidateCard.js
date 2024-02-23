import React from 'react'
import { RejectedCardIcon, ShortlistedCardIcon, VerifiedIcon } from '../../icons/Icons'

export const CandidateCard = ({candidate}) => {
    const { name, thumbnail, designation, experience, holdingOffer, contact, noticePeriod, status  } = candidate
    const { years, months } = experience
    const { email, phone } = contact

    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dataTransfer.dropEffect = "move";
    };

  return (
    <div
        id={name} 
        draggable
        onDragStart={handleDragStart}
        className='border border-[#E1E4E8] p-4 rounded-lg flex flex-col gap-2 w-[292px] m-2 bg-white' >
        <div className='flex justify-between' >
            <img 
                src={thumbnail}
                alt='candidate thumbnail'
                className='w-6 h-6 rounded-full object-cover' 
            />
            <p className='text-[10px] text-[#6A737D]' >Applied 1d ago</p>
        </div>
        <div className='flex gap-1' >
            <div className='text-sm font-semibold' >{name}</div>
            <VerifiedIcon />
        </div>
        <div className='text-xs'>{designation} at Rapid Circle</div>
        <div className='flex gap-x-4'>
            <div>
                <p className='text-[10px] text-[#6A737D]' >Experience</p>
                <p className='text-xs font-semibold'>{years}y {months}m</p>
            </div>
            <div>
                <p className='text-[10px] text-[#6A737D]' >Holding offer?</p>
                <p className='text-xs font-semibold'>{holdingOffer ? 'Yes': 'No'}</p>
            </div>
            <div>
                <p className='text-[10px] text-[#6A737D]' >Notice period</p>
                <p className='text-xs font-semibold'>{noticePeriod}</p>
            </div>
        </div>
        {status === 'applied' && 
            <div>
                <p className='text-[10px] text-[#6A737D]' >Contact</p>
                <p className='text-xs font-semibold'>{email}</p>
                <p className='text-xs font-semibold'>{phone}</p>
            </div>
        }
        {status === 'rejected' && 
            <div className='text-[10px] flex items-center gap-1' >
                <RejectedCardIcon />
                <p className=' text-[#6A737D]' >Rejected by</p>
                <p className='font-semibold'>Yogini Bende</p>
                <p className='text-[#6A737D]'>on 15 Dec 2023</p>
            </div>
        }
        {status === 'shortlisted' && 
            <div className='text-[10px] flex items-center gap-1' >
                <ShortlistedCardIcon />
                <p className=' text-[#6A737D]' >Shortlisted by</p>
                <p className='font-semibold'>Yogini Bende</p>
                <p className='text-[#6A737D]'>on 15 Dec 2023</p>
            </div>
        }
    </div>
  )
}
