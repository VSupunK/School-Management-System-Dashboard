'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
  
    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    }

    console.log(calendarEvents);
  
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['work_week',"day"]}
      view={view}
      style={{ height: "90%" }}
      onView={handleOnChangeView}
      min={new Date(2024, 9, 21, 8, 0)}
      max={new Date(2024, 9, 21, 17, 0)}
    />
  )
}

export default BigCalendar;