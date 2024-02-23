import { CandidateCard } from './CandidateCard'
import { AppliedIcon, RejectedIcon, ShortlistedIcon } from '../../icons/Icons'
import { CANDIDATES } from './constants'

export const CandidatesList = ({candidates, type, setCandidates}) => {
  const isRejectedType = type === 'rejected'
  const isAppliedType = type === 'applied'
  const isShortlistedType = type === 'shortlisted'
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const container = e.currentTarget;    
    const elementToAppend = document.getElementById(data);
    const firstChild = container.firstChild;
    container.insertBefore(elementToAppend, firstChild);

    console.log({ container, data })

    // const id = container.id
    // console.log({id, data})
    // console.log(container.contains(elementToAppend));

    // if (!elementToAppend) {
    //   console.error(`Element with ID ${data} not found.`);
    //   return;
    // }

    // const updatedCandidates = CANDIDATES.map(candidate => candidate.name===data ? {...candidate, status : id } : candidate)
    // setCandidates(updatedCandidates)
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <div 
      className={`bg-[#FAFBFC] rounded-lg border w-[308px] ${isRejectedType ? 'border-red-100' : isAppliedType ? 'border-[#E1E4E8]' : 'border-[#E2F5EA]'}  `} >
        {isRejectedType && <RejectedListHeader count={candidates.length}/>}
        {isAppliedType && <AppliedListHeader count={candidates.length}/>}
        {isShortlistedType && <ShortListedListHeader count={candidates.length}/>}
        <div 
          className='h-[545px] overflow-auto container' 
          id={type}      
          onDrop={handleDrop}
          onDragOver={handleDragOver} 
        >
          {candidates.map((candidate, index) => <CandidateCard key={`${candidate.name}-${index}`} candidate={candidate}/>)}
        </div>
    </div>
  )
}

const RejectedListHeader = ({count}) => (
  <div className='w-full bg-[#FFEAEA] flex gap-x-2.5 items-center text-xs font-semibold text-[#EB5757] p-2 rounded-t-md'>
    <RejectedIcon />
    <p>REJECTED</p>
    <em>•</em>
    <p>{count}</p>
  </div>
) 

const AppliedListHeader = ({count}) => (
  <div className='w-full bg-[#E1E4E8] flex gap-x-2.5 items-center text-xs font-semibold p-2 rounded-t-md'>
    <AppliedIcon />
    <p>Applied</p>
    <em>•</em>
    <p>{count}</p>
  </div>
)

const ShortListedListHeader = ({count}) => (
  <div className='w-full bg-[#E2F5EA] flex gap-x-2.5 items-center text-xs font-semibold p-2 rounded-t-md text-[#219653]'>
    <ShortlistedIcon />
    <p>Shortlisted</p>
    <em>•</em>
    <p>{count}</p>
  </div>
)
