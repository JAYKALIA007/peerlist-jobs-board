import { JOB_POSTED_BY_IMG_URL } from "./constants";

export const JobPostedByImage = () => {
  return (
    <img
      src={JOB_POSTED_BY_IMG_URL}
      alt="admin thumbnail"
      className="relative bottom-1 h-6 w-6 rounded-full object-cover"
    />
  );
};

export const getUpdatedCandidatesList = (
  targetElement,
  candidates,
  draggedCandidateName,
) => {
  const updatedCandidates = candidates.map((candidate) =>
    candidate.name === draggedCandidateName
      ? { ...candidate, status: targetElement }
      : candidate,
  );

  const index = updatedCandidates.findIndex(
    (candidate) => candidate.name === draggedCandidateName,
  );

  if (index !== -1) {
    updatedCandidates.unshift(updatedCandidates.splice(index, 1)[0]);
  }

  return updatedCandidates;
};
