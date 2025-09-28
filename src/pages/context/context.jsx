import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StudentDataContext = createContext();

export const useStudentContext = () => useContext(StudentDataContext);

export const StudentContextProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(null);
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [toppers, setToppers] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.quizrr.in/api/hiring/leaderboard?page=${page}&limit=${100}`)
        setStudentData(res?.data)
        setTotalPages(res?.data?.totalPages)

        if (page === 1) {
          const topThree = res?.data?.data?.results?.slice(0, 3) || [];
          setToppers(topThree);
        }
      } catch (error) {
        console.error('error while fetching the data', error)
      }
    }

    fetchData()
  }, [page])
  return (
    <StudentDataContext.Provider value={{ studentData, setStudentData, totalPages, toppers, page, setPage }}>
      {children}
    </StudentDataContext.Provider>
  );
};
