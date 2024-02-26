import React from "react";
import { Peerlist, PeerlistLogo } from "../../icons/Icons";

export const NavHeader = () => {
  return (
    <div className="mb-12 flex items-center gap-x-2.5">
      <PeerlistLogo />
      <Peerlist />
    </div>
  );
};
