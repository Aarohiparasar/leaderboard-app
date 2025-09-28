import React from "react";
import { Card } from "@/components/ui/card";
import "./css/ToppersCard.css";
import avatar from "../assets/avatar.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import checks from "../assets/checks.png";
import physics from "../assets/physics.png";
import chemistry from "../assets/chemistry.png";
import maths from "../assets/maths.png";
import Target from "../assets/Target.png";

const ToppersCard = ({ gradient, student, darkMode }) => {
    const Maths =
        student?.subjectWiseMarks?.["607018ee404ae53194e73d92"] || 0;
    const Physics =
        student?.subjectWiseMarks?.["607018ee404ae53194e73d90"] || 0;
    const Chemistry =
        student?.subjectWiseMarks?.["607018ee404ae53194e73d91"] || 0;

    return (
        <div className="w-[1176px] h-[408px] p-[24px] opacity-100">
            <Card
                className="w-[264px] h-[392px] relative opacity-100 border-[1px] border-[#FFC721] rounded-3xl rounded-b-none shadow-md"
                style={{ background: gradient }}
            >
                {/* Avatar */}
                <img
                    src={student?.userId?.profilePicture || avatar}
                    alt="Avatar"
                    className="avatar"
                    loading="lazy"
                />

                {/* Vector decorations */}
                <div className="vector-container">
                    <img
                        src={Vector1}
                        className="absolute top-0 left-0 w-[17px] h-[11px]"
                        alt="Vector1"
                    />
                    <img
                        src={Vector2}
                        className="absolute top-0 left-[12px] w-[12px] h-[10px]"
                        alt="Vector2"
                    />
                    <img
                        src={Vector3}
                        className="absolute top-[9px] left-[5px] w-[14px] h-[15px]"
                        alt="Vector3"
                    />
                   <p
  className="absolute top-[12px] left-[10px] w-[3px] h-[12px] text-[10px] font-bold"
>
  {student?.rank}
</p>

                
                </div>

                {/* Name + Rank Badge */}
                <div className="text-block">
                    <p className="font-inter font-bold text-[20px] leading-[28px] text-center align-middle w-[264px] h-[24px]">
                        {student?.userId?.name}
                    </p>
                    <div
                        className={`rank-badge ${darkMode ? "bg-[#733E0A] text-white" : "bg-yellow-400 text-black"
                            }`}
                    >
                        <p>{student?.rank} Rank</p>
                    </div>
                </div>

                {/* Scores Section */}
                <div className="absolute top-[200px] flex flex-col gap-[16px]">
                    <div className="score-row">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={checks}
                                alt="Check"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="label">Overall Score</div>
                        <div className="value">
                            <span>{student?.totalMarkScored}</span>
                            <span>/300</span>
                        </div>
                    </div>

                    <div className="score-row">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={physics}
                                alt="Physics"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="label w-[175px]">Phy Score</div>
                        <div className="small-score">
                            <span>{Physics}</span>
                        </div>
                    </div>

                    <div className="score-row">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={chemistry}
                                alt="Chemistry"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="label w-[175px]">Chem Score</div>
                        <div className="small-score">
                            <span>{Chemistry}</span>
                        </div>
                    </div>

                    <div className="score-row">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={maths}
                                alt="Maths"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="label w-[175px]">Maths Score</div>
                        <div className="small-score">
                            <span>{Maths}</span>
                        </div>
                    </div>

                    <div className="score-row">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={Target}
                                alt="Target"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="label w-[175px]">Accuracy</div>
                        <div className="small-score">
                            <span>{Math.round(student?.accuracy)}%</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ToppersCard;
