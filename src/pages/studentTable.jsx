// LeaderboardTable.jsx
import React, { useState, useRef } from "react";
import Pagination from "./pegination";
import avatar from "../assets/avatar.png";
import { useStudentContext } from "./context/context";

const LeaderboardTable = ({ darkMode }) => {
    const { studentData, page } = useStudentContext();
    const [isScrolling, setIsScrolling] = useState(false);
    const [showPagination, setShowPagination] = useState(true);

    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

        if (scrollTop + clientHeight >= scrollHeight - 10) {
            setIsScrolling(false);
            setShowPagination(true);
        } else if (scrollTop > 0) {
            setIsScrolling(true);
            setShowPagination(false);
        } else {
            setIsScrolling(false);
            setShowPagination(true);
        }
    };

    const students = studentData?.data?.results || [];

    const defaultStudent = {
        rank: 30,
        name: "Aarohi",
        score: 100,
        phy: 85,
        chem: 86,
        math: 89,
        accuracy: "70%",
        image: avatar,
    };

    return (
        <div className="flex justify-center mt-8">
            <div className="w-full max-w-[1176px] h-[712px] px-6 relative">
                <div className="w-full h-full rounded-xl border-[1px] border-[#D2DFEB] overflow-hidden flex flex-col">
                  
                    <div
                        className="overflow-y-auto overflow-x-auto sm:overflow-x-hidden flex-1"
                        style={{ maxHeight: "600px" }}
                        ref={scrollRef}
                        onScroll={handleScroll}
                    >
                        <table className="min-w-[700px] sm:min-w-full w-full border-collapse">
                            <thead>
                                <tr className={`h-[64px] sticky top-0 border-b-2 ${darkMode
                                    ? "bg-gray-800 text-white border-gray-700"
                                    : "bg-[#F5F9FE] text-black border-blue-200"
                                    }`}>
                                    <th className="p-2 text-left">Rank</th>
                                    <th className="p-2 text-left">Student Name</th>
                                    <th className="p-2 text-center">Overall Score</th>
                                    <th className="p-2 text-center">Phy</th>
                                    <th className="p-2 text-center">Chem</th>
                                    <th className="p-2 text-center">Maths</th>
                                    <th className="p-2 text-center">Accuracy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(page === 1 ? students.slice(3) : students)
                                    .map((student, index) => {
                                        const math =
                                            student.subjectWiseMarks?.["607018ee404ae53194e73d92"] || 0;
                                        const physics =
                                            student.subjectWiseMarks?.["607018ee404ae53194e73d90"] || 0;
                                        const chemistry =
                                            student.subjectWiseMarks?.["607018ee404ae53194e73d91"] || 0;

                                        return (
                                            <tr
                                                key={student?.rank}
                                                className={`border-b h-[64px] ${darkMode ? "border-gray-700 text-white" : "border-gray-200"
                                                    }`}
                                            >
                                                <td className="p-1 sm:p-2">
                                                    <div
                                                        className={`w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] ${darkMode
                                                                ? "border-gray-700 bg-gray-800 text-white"
                                                                : "border-[#D2DFEB] bg-[#F5F9FE] text-black"
                                                            }`}
                                                    >
                                                        {student?.rank}
                                                    </div>
                                                </td>
                                                <td className="p-1 sm:p-2 flex items-center gap-2">
                                                    <img
                                                        src={student.userId?.profilePicture || avatar}
                                                        alt={student?.userId?.name}
                                                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] object-cover rounded-full"
                                                    />
                                                    <span
                                                        className={`font-inter font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] ${darkMode ? "text-white" : "text-black"
                                                            }`}
                                                    >
                                                        {student?.userId?.name}
                                                    </span>
                                                </td>
                                                <td className="p-1 sm:p-2 text-center">
                                                    <div
                                                        className={`w-[70px] sm:w-[89px] h-[28px] sm:h-[32px] flex items-center justify-center rounded-full font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] ${darkMode ? "bg-gray-800 text-black" : "bg-[#F5F9FE] text-black"
                                                            }`}
                                                    >
                                                        {student.marksGained}
                                                        <span className="hidden sm:inline text-[12px] font-normal text-gray-500 ml-1">
                                                            /300
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className={`p-1 sm:p-2 text-center ${darkMode ? "text-white" : ""}`}>
                                                    {physics}
                                                </td>
                                                <td className={`p-1 sm:p-2 text-center ${darkMode ? "text-white" : ""}`}>
                                                    {chemistry}
                                                </td>
                                                <td className={`p-1 sm:p-2 text-center ${darkMode ? "text-white" : ""}`}>
                                                    {math}
                                                </td>
                                                <td className={`p-1 sm:p-2 text-center ${darkMode ? "text-white" : ""}`}>
                                                    {Math.round(student.accuracy)}%
                                                </td>
                                            </tr>
                                        );
                                    })}

                              
                                <tr
                                    className={`border-b border-gray-200 h-[64px] ${isScrolling ? "bg-[#EAF3FA] sticky bottom-0" : "bg-[#EAF3FA]"
                                        }`}
                                >
                                    <td className="p-1 sm:p-2">
                                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#D2DFEB] bg-[#F5F9FE]">
                                            {defaultStudent.rank}
                                        </div>
                                    </td>
                                    <td className="p-1 sm:p-2 flex items-center gap-2">
                                        <img
                                            src={defaultStudent.image}
                                            alt={defaultStudent.name}
                                            className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] object-cover rounded-full"
                                        />
                                        <span className="font-inter font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                                            {defaultStudent.name}
                                        </span>
                                    </td>
                                    <td className="p-1 sm:p-2 text-center">
                                        <div className="w-[70px] sm:w-[89px] h-[28px] sm:h-[32px] flex items-center justify-center rounded-full bg-[#F5F9FE] text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[24px]">
                                            {defaultStudent.score}{" "}
                                            <span className="hidden sm:inline text-[12px] font-normal text-gray-500 ml-1">
                                                /300
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-1 sm:p-2 text-center">{defaultStudent.phy}</td>
                                    <td className="p-1 sm:p-2 text-center">{defaultStudent.chem}</td>
                                    <td className="p-1 sm:p-2 text-center">{defaultStudent.math}</td>
                                    <td className="p-1 sm:p-2 text-center">{defaultStudent.accuracy}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {showPagination && (
                        <div className="w-full h-[72px] pt-5 pb-5 px-3">
                            <Pagination />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardTable;
