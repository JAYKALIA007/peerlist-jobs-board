import { CandidatesList } from './CandidatesList'

export const CandidatesBoard = ({candidates, setCandidates}) => {
    const rejectedCandidates = candidates.filter(candidate => candidate.status === 'rejected')
    const appliedCandidates = candidates.filter(candidate =>candidate.status === 'applied')
    const shortlistedCandidates = candidates.filter(candidate => candidate.status === 'shortlisted')

  return (
    <div className='flex gap-x-2 container' >
        <CandidatesList candidates={rejectedCandidates} type='rejected' setCandidates={setCandidates}/>
        <CandidatesList candidates={appliedCandidates}  type='applied'setCandidates={setCandidates}/>
        <CandidatesList candidates={shortlistedCandidates} type='shortlisted' setCandidates={setCandidates}/>
    </div>
  )
}
