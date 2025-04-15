"use client";

import React from "react";
import ScheduleTable from "../components/ScheduleTable";
import Banner from "../components/Banner";

export default function SchedulePage() {
  return (
    <>
      <Banner
        imageUrl="/schedule.webp"
        title="Class Schedule"
        page="Schedule"
      />
      <ScheduleTable />
    </>
  );
}
