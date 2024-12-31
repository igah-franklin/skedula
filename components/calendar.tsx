'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CalendarSearch } from 'lucide-react';
import { getDaysInMonth } from '@/utils/date';

interface CalendarProps {
  onSelectDate: (date: Date) => void
  selectedDate?: Date
}

export function Calendar({ onSelectDate, selectedDate }: CalendarProps) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const currentDate = new Date(2024, 11) // December 2024
  const days = getDaysInMonth(2024, 11)

  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <CalendarSearch className="w-5 h-5" />
        December 2024
      </h2>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-muted-foreground p-2">
            {day}
          </div>
        ))}
        {Array.from({ length: days[0].getDay() }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((date) => {
          const isSelected = selectedDate?.toDateString() === date.toDateString()
          const isHighlighted = date.getDate() === 28
          
          return (
            <button
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              className={cn(
                "aspect-square p-2 text-sm rounded-full hover:bg-blue-50",
                isSelected && "bg-black/50 text-white hover:bg-black",
                isHighlighted && !isSelected && "border-2 border-black"
              )}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

