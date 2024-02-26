import { CandidatesList } from "./CandidatesList";
import { APPLIED, REJECTED, SHORTLISTED } from "./constants";

export const CandidatesBoard = ({ candidates, onChange }) => {
  const rejectedCandidates = candidates.filter(
    (candidate) => candidate.status === REJECTED,
  );
  const appliedCandidates = candidates.filter(
    (candidate) => candidate.status === APPLIED,
  );
  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.status === SHORTLISTED,
  );

  return (
    <div className="container flex gap-x-2">
      <CandidatesList
        candidates={rejectedCandidates}
        type={REJECTED}
        onChange={onChange}
      />
      <CandidatesList
        candidates={appliedCandidates}
        type={APPLIED}
        onChange={onChange}
      />
      <CandidatesList
        candidates={shortlistedCandidates}
        type={SHORTLISTED}
        onChange={onChange}
      />
    </div>
  );
};
