import React from "react";
import { useStudentContext } from "./context/context";

const Pagination = () => {
    const { totalPages, page, setPage } = useStudentContext();

    const handlePageClick = (pageNum) => setPage(pageNum);
    const handlePrev = () => page > 1 && setPage(page - 1);
    const handleNext = () => page < totalPages && setPage(page + 1);

    const renderPages = () => {
        const pages = [];
        const delta = 2;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= page - delta && i <= page + delta)
            ) {
                pages.push(
                    <button
                        key={i}
                        className="w-[32px] h-[32px] flex items-center justify-center mx-[4px] focus:outline-none"
                        style={{
                            backgroundColor: i === page ? "#432DD7" : "#FFFFFF",
                            color: i === page ? "#FFFFFF" : "#1D2933",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "#D2DFEB",
                            borderRadius: "9999px",
                        }}
                        onClick={() => handlePageClick(i)}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = i === page ? "#432DD7" : "#FFFFFF"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = i === page ? "#432DD7" : "#FFFFFF"}
                    >
                        {i}
                    </button>

                );
            } else if (i === 2 && page > delta + 2) {
                pages.push(
                    <span key="start-ellipsis" className="mx-1">
                        ...
                    </span>
                );
            } else if (i === totalPages - 1 && page < totalPages - delta - 1) {
                pages.push(
                    <span key="end-ellipsis" className="mx-1">
                        ...
                    </span>
                );
            }
        }

        return pages;
    };

    return (
        <div className="w-[1104px] h-[32px] flex items-center gap-[8px] opacity-100 justify-center">
            <button
                className="w-[82px] h-[32px] px-[8px] py-[4px] flex items-center justify-center
                rounded-[360px] border border-[#D2DFEB] bg-[#D2DFEB] text-[#1D2933] opacity-30 disabled:cursor-not-allowed"
                onClick={handlePrev}
                disabled={page === 1}
                style={{
                    borderRadius: "9999px",
                }}
            >
                Previous
            </button>

            <div className="flex items-center ">{renderPages()}</div>

            <button
                className="w-[56px] h-[32px] px-[8px] py-[4px] rounded-full focus:outline-none
         border-[#D2DFEB] flex items-center justify-center border-[1px]"
                style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#D2DFEB",
                    borderRadius: "9999px",
                }}
                onClick={handleNext}
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination; 