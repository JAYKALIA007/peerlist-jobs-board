import React, { useState } from "react";
import { JobHeader } from "./JobHeader";
import { Search } from "./Search";
import { CandidatesBoard } from "./CandidatesBoard";
import { CANDIDATES } from "./constants";
export const JobsBoard = () => {
  const [candidates, setCandidates] = useState(CANDIDATES);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      candidate.designation
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      candidate.contact.phone.includes(searchQuery) ||
      candidate.contact.email
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()),
  );

  return (
    <div className="container col-span-5 h-screen overflow-hidden">
      <JobHeader />
      <div className="p-6">
        <Search searchQuery={searchQuery} onChange={setSearchQuery} />
        <CandidatesBoard
          candidates={filteredCandidates}
          onChange={setCandidates}
        />
      </div>
    </div>
  );
};
