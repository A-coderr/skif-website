import { useState } from "react";

// Type definitions for the classes
type Class = {
  day: string;
  time: string;
  start: number;
  duration: number;
  name: string;
  color: string;
};

type TabsProps = {
  classes: Class[];
};

const Tabs: React.FC<TabsProps> = ({ classes }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Group classes by day
  const groupedClasses = classes.reduce(
    (acc: Record<string, Class[]>, curr) => {
      if (!acc[curr.day]) {
        acc[curr.day] = [];
      }
      acc[curr.day].push(curr);
      return acc;
    },
    {}
  );

  const days = Object.keys(groupedClasses);

  return (
    <>
      {/* Tabs for days */}
      <div className="flex w-full justify-center space-x-4">
        {days.map((day, index) => (
          <button
            key={index}
            className={`py-4 px-4 rounded-lg transition-all duration-300
          flex-1
          ${
            activeTab === index
              ? "bg-gray-800 text-white font-semibold shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
            onClick={() => setActiveTab(index)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Classes content */}
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          {groupedClasses[days[activeTab]].map((classItem, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${classItem.color}`}
            >
              <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
              <p>{classItem.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function ScheduleTable() {
  const classes = [
    {
      day: "Tuesday",
      time: "5:30 pm - 6:30 pm",
      start: 17.5,
      duration: 1,
      name: "Kids",
      color: "bg-[#d9f4c8] text-black",
    },
    {
      day: "Tuesday",
      time: "6:30 pm - 7:30 pm",
      start: 18.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#3d4e51] text-white",
    },
    {
      day: "Tuesday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f6ab71] text-black",
    },
    {
      day: "Thursday",
      time: "5:30 pm - 6:30 pm",
      start: 17.5,
      duration: 1,
      name: "Kids",
      color: "bg-[#d9f4c8] text-black",
    },
    {
      day: "Thursday",
      time: "6:30 pm - 7:30 pm",
      start: 18.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#3d4e51] text-white",
    },
    {
      day: "Thursday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f6ab71] text-black",
    },
    {
      day: "Friday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Tournament",
      color: "bg-[#7b5e7b] text-white",
    },
    {
      day: "Saturday",
      time: "12:30 pm - 1:30 pm",
      start: 12.5,
      duration: 1,
      name: "Kids",
      color: "bg-[#d9f4c8] text-black",
    },
    {
      day: "Saturday",
      time: "1:30 pm - 2:30 pm",
      start: 13.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#3d4e51] text-white",
    },
    {
      day: "Saturday",
      time: "2:30 pm - 4:00 pm",
      start: 14.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f6ab71] text-black",
    },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeSlots = Array.from({ length: 10 }, (_, i) => i + 12); // 12 PM to 9 PM

  const formatTime = (hour: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = ((hour - 1) % 12) + 1;
    return `${formattedHour} ${period}`;
  };

  return (
    <section className="w-full min-h-[70vh] flex justify-center p-6">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full text-left">
          <h1 className="text-2xl md:text-6xl font-bold mb-6 text-gray-800">
            Schedule 2024-2025
          </h1>
        </div>
        {/* Mobile Grid Layout */}
        <div className="grid gap-4 md:hidden w-full">
          <Tabs classes={classes} />
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block w-full">
          <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-20 flex flex-col">
              <div className="h-12 border border-gray-100 bg-gray-300 text-white flex items-center justify-center font-bold"></div>
              {timeSlots.map((hour) => (
                <div
                  key={hour}
                  className="h-20 border border-gray-100 flex items-center justify-center bg-gray-200"
                >
                  {formatTime(hour)}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 flex-grow border-l border-gray-100">
              {days.map((day) => (
                <div
                  key={day}
                  className="flex flex-col border-r w-full relative border-gray-300"
                >
                  <div className="h-12 border-b bg-gray-800 text-white font-bold flex items-center justify-center">
                    {day}
                  </div>
                  <div className="relative flex-grow grid grid-rows-20">
                    {timeSlots.flatMap((hour) => [
                      <div
                        key={`${day}-${hour}-0`}
                        className="h-10 border border-gray-100 bg-gray-50"
                      ></div>,
                      <div
                        key={`${day}-${hour}-30`}
                        className="h-10 border border-gray-200 bg-gray-100"
                      ></div>,
                    ])}
                    {classes
                      .filter((cls) => cls.day === day)
                      .map((cls) => (
                        <div
                          key={cls.name}
                          className={`absolute left-0 right-0 shadow-md ${cls.color} rounded-md p-2`}
                          style={{
                            top: `${(cls.start - 12) * 40 * 2}px`,
                            height: `${cls.duration * 40 * 2}px`,
                          }}
                        >
                          <div className="text-xs font-semibold">
                            {cls.time}
                          </div>
                          <div className="text-lg font-bold">{cls.name}</div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
