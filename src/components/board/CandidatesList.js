import { CandidateCard } from "./CandidateCard";
import { AppliedIcon, RejectedIcon, ShortlistedIcon } from "../../icons/Icons";
import { getUpdatedCandidatesList } from "./helpers";
import { APPLIED, REJECTED, SHORTLISTED } from "./constants";

export const CandidatesList = ({ candidates, type, onChange }) => {
  const isRejectedType = type === REJECTED;
  const isAppliedType = type === APPLIED;
  const isShortlistedType = type === SHORTLISTED;
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const targetElement = e.currentTarget.id;

    onChange((prevCandidates) => {
      return getUpdatedCandidatesList(targetElement, prevCandidates, data);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <div
      className={`w-[308px] rounded-lg border bg-[#FAFBFC] ${isRejectedType ? "border-red-100" : isAppliedType ? "border-[#E1E4E8]" : "border-[#E2F5EA]"}  `}
    >
      {isRejectedType && <RejectedListHeader count={candidates.length} />}
      {isAppliedType && <AppliedListHeader count={candidates.length} />}
      {isShortlistedType && <ShortListedListHeader count={candidates.length} />}
      <div
        className="container h-[545px] overflow-auto"
        id={type}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {candidates.map((candidate, index) => (
          <CandidateCard
            key={`${candidate.name}-${index}`}
            candidate={candidate}
          />
        ))}
      </div>
    </div>
  );
};

const RejectedListHeader = ({ count }) => (
  <div className="flex w-full items-center gap-x-2.5 rounded-t-md bg-[#FFEAEA] p-2 text-xs font-semibold text-[#EB5757]">
    <RejectedIcon />
    <p>REJECTED</p>
    <em>•</em>
    <p>{count}</p>
  </div>
);

const AppliedListHeader = ({ count }) => (
  <div className="flex w-full items-center gap-x-2.5 rounded-t-md bg-[#E1E4E8] p-2 text-xs font-semibold">
    <AppliedIcon />
    <p>Applied</p>
    <em>•</em>
    <p>{count}</p>
  </div>
);

const ShortListedListHeader = ({ count }) => (
  <div className="flex w-full items-center gap-x-2.5 rounded-t-md bg-[#E2F5EA] p-2 text-xs font-semibold text-[#219653]">
    <ShortlistedIcon />
    <p>Shortlisted</p>
    <em>•</em>
    <p>{count}</p>
  </div>
);
