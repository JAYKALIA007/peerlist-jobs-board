import React from "react";

export const NavFooter = () => {
  return (
    <div className="lg:flex lg:flex-col gap-3 text-[10px] hidden">
      <div className="font-semibold leading-[14px] text-[#444D56]">
        Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C
      </div>
      <div>© 2023 Peerlist Inc.</div>
    </div>
  );
};
