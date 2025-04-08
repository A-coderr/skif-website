import { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";
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

  const abbreviateDay = (day: string) => day.slice(0, 3);

  return (
    <>
      {/* Tabs for days */}
      <div className="flex w-full overflow-x-auto no-scrollbar gap-2 px-2">
        {days.map((day, index) => (
          <button
            key={index}
            className={`flex-1 min-w-[64px] py-3 px-4 text-base text-center transition-all duration-300
    ${
      activeTab === index
        ? "bg-gray-800 text-white font-semibold shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
            onClick={() => setActiveTab(index)}
          >
            <span className="block md:hidden">{abbreviateDay(day)}</span>
            <span className="hidden md:block">{day}</span>
          </button>
        ))}
      </div>

      {/* Classes content */}
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          {groupedClasses[days[activeTab]].map((classItem, index) => (
            <div key={index} className={`p-4 shadow-lg ${classItem.color}`}>
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
      color: "bg-[#ffe2f0] text-black",
    },
    {
      day: "Tuesday",
      time: "6:30 pm - 7:30 pm",
      start: 18.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#1f2937] text-white",
    },
    {
      day: "Tuesday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f87171] text-white",
    },
    {
      day: "Thursday",
      time: "5:30 pm - 6:30 pm",
      start: 17.5,
      duration: 1,
      name: "Kids",
      color: "bg-[#ffe2f0] text-black",
    },
    {
      day: "Thursday",
      time: "6:30 pm - 7:30 pm",
      start: 18.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#1f2937] text-white",
    },
    {
      day: "Thursday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f87171] text-white",
    },
    {
      day: "Friday",
      time: "7:30 pm - 9:00 pm",
      start: 19.5,
      duration: 1.5,
      name: "Tournament",
      color: "bg-[#8b5cf6] text-white",
    },
    {
      day: "Saturday",
      time: "12:30 pm - 1:30 pm",
      start: 12.5,
      duration: 1,
      name: "Kids",
      color: "bg-[#ffe2f0] text-black",
    },
    {
      day: "Saturday",
      time: "1:30 pm - 2:30 pm",
      start: 13.5,
      duration: 1,
      name: "Intermediate",
      color: "bg-[#1f2937] text-white",
    },
    {
      day: "Saturday",
      time: "2:30 pm - 4:00 pm",
      start: 14.5,
      duration: 1.5,
      name: "Adults",
      color: "bg-[#f87171] text-white",
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
    <section className="w-full min-h-[60vh] flex justify-center p-6">
      <div className="flex flex-col w-full max-w-7xl justify-start">
        <Title text="Class Schedule 2024-2025" />

        {/* Mobile Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:hidden w-full"
        >
          <Tabs classes={classes} />
        </motion.div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block w-full">
          <div className="w-full flex flex-col md:flex-row justify-center">
            {/* Time Column */}
            <div className="w-20 flex flex-col pt-2">
              {timeSlots.map((hour) => (
                <motion.div
                  key={hour}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: hour * 0.04 }}
                  className="h-20 border justify-center items-center border-[#f9f9f9] flex bg-[#f9f9f9] text-xs md:text-sm"
                >
                  {formatTime(hour)}
                </motion.div>
              ))}
            </div>

            {/* Days and Classes */}
            <div className="grid grid-cols-1 md:grid-cols-6 flex-grow border-l border-gray-100">
              {days.map((day) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col border-r w-full relative border-gray-300"
                >
                  <div className="h-12 border-b bg-gray-800 text-white font-bold text-sm flex items-center justify-center">
                    {day}
                  </div>
                  <div className="relative flex-grow grid grid-rows-19">
                    {timeSlots.flatMap((hour, index) => {
                      const isLastHour = index === timeSlots.length - 1;
                      return isLastHour
                        ? [
                            <div
                              key={`${day}-${hour}-0`}
                              className="h-10 border border-gray-100 bg-gray-50 text-xs md:text-sm"
                            ></div>,
                          ]
                        : [
                            <div
                              key={`${day}-${hour}-0`}
                              className="h-10 border border-gray-100 bg-gray-50 text-xs md:text-sm"
                            ></div>,
                            <div
                              key={`${day}-${hour}-30`}
                              className="h-10 border border-gray-200 bg-gray-100 text-xs md:text-sm"
                            ></div>,
                          ];
                    })}
                    {classes
                      .filter((cls) => cls.day === day)
                      .map((cls) => (
                        <div
                          key={cls.name}
                          className={`absolute left-0 right-0 shadow-md ${cls.color} p-2`}
                          style={{
                            top: `${(cls.start - 12) * 40 * 2}px`,
                            height: `${cls.duration * 40 * 2}px`,
                          }}
                        >
                          <div className="text-xs font-semibold">
                            {cls.time}
                          </div>
                          <div className="text-sm font-bold truncate">
                            {cls.name}
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
