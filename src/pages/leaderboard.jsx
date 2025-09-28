import React, { Suspense, useState } from "react";
import { useStudentContext } from "./context/context";
import LeaderboardTable from "./studentTable";

const Header = React.lazy(() => import("./Header"));
const ToppersCard = React.lazy(() => import("./ToppersCard"));

const Leaderboard = () => {
  const { toppers, studentData } = useStudentContext();
  const [darkMode, setDarkMode] = useState(false);

  const firstTopper =
    Array.isArray(toppers) && toppers.length > 0 ? toppers[0] : null;
  const secondTopper =
    Array.isArray(toppers) && toppers.length > 1 ? toppers[1] : null;
  const thirdTopper =
    Array.isArray(toppers) && toppers.length > 2 ? toppers[2] : null;

  console.log(studentData, "-------", toppers);

  return (
    <div
      className={`flex w-full max-w-[1290px] flex-col gap-[24px] min-h-screen mx-auto ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-end pr-6 pt-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg font-medium shadow-md transition duration-300 w-[140px] h-[40px] ${darkMode ? "text-black bg-yellow-300" : "text-black bg-white"
              }`}
          >
            {darkMode ? "☀️Day" : "🌙Night"}
          </button>

        </div>

        <Header darkMode={darkMode} />


        <div className="hidden lg:flex w-full max-w-[1700px] h-[408px] gap-[0.1px] opacity-100 mb-[16px] mx-auto">
          <ToppersCard
            gradient={
              darkMode
                ? "linear-gradient(180deg,#2D3748 0%,#1A202C 100%)"
                : "linear-gradient(180deg,#FFF7DE 0%,#FFFFFF 100%)"
            }
            student={firstTopper}
            className="flex-1"
          />
          <ToppersCard
            gradient={
              darkMode
                ? "linear-gradient(180deg,#4A5568 0%,#2D3748 100%)"
                : "linear-gradient(180deg, #ECEEF1 0%, #FFFFFF 100%)"
            }
            student={secondTopper}
            className="flex-1"
          />
          <ToppersCard
            gradient={
              darkMode
                ? "linear-gradient(180deg,#742A2A 0%,#1A202C 100%)"
                : "linear-gradient(180deg, #FFE4D8 0%, #FFFFFF 100%)"
            }
            student={thirdTopper}
            className="flex-1"
          />
          <ToppersCard
            gradient={
              darkMode
                ? "linear-gradient(180deg,#2D3748 0%,#1A202C 100%)"
                : ""
            }
            className="flex-1"
          />
        </div>

        <LeaderboardTable darkMode={darkMode} />
      </Suspense>
    </div>
  );
};

export default Leaderboard;
