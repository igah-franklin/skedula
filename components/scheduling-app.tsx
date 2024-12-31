'use client'

import { useState } from 'react'

import { CalendarIcon } from 'lucide-react'
import { Calendar } from './calendar'
import { TimeSlots } from './time-slots'
import { BookingForm } from './booking-form'

export default function SchedulingApp() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-2 mb-8">
          <CalendarIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Scheduling App</h1>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <Calendar 
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
          <TimeSlots
            selectedTime={selectedTime}
            onSelectTime={setSelectedTime}
          />
          <BookingForm
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </div>
      </div>
    </div>
  )
}

