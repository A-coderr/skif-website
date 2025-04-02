import React from "react";

interface Instructor {
  photo: string;
  name: string;
  bio: string;
}

export const InstructorCard: React.FC<{ instructor: Instructor }> = ({
  instructor,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={instructor.photo}
        alt={instructor.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{instructor.name}</div>
        <p className="text-gray-700 text-base">{instructor.bio}</p>
      </div>
    </div>
  );
};
