import React from "react";

function Sidebar() {
  return (
    <div className="w-72 p-2 bg-[#56929c] shadow-xl border-t-white sidebar text-white font-semibold">
      <h2 className="py-6 px-2">Blackjacker Sidemenu</h2>
      <div className="flex flex-col text-sm font-normal pl-5">
        <a href="https://www.blackjackapprenticeship.com/blackjack-strategy-charts/" className="underline underline-offset-2">- Basic Strategy</a>
        <a href="https://www.blackjackapprenticeship.com/how-to-count-cards/" className="underline underline-offset-2">- Card Counting Strategy</a>
      </div>
    </div>
  );
}

export default Sidebar;
