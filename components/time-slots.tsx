'use client'

import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'

interface TimeSlotsProps {
  onSelectTime: (time: string) => void
  selectedTime?: string
}

export function TimeSlots({ onSelectTime, selectedTime }: TimeSlotsProps) {
  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
  ]

  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <Clock className="w-5 h-5" />
        Available Time Slots
      </h2>
      <div className="grid gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
            className={cn(
              "p-3 text-sm rounded-lg hover:bg-blue-50 text-left",
              selectedTime === time && "bg-black text-white hover:bg-black",
              time === '11:00 - 12:00' && "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
            )}
            disabled={time === '11:00 - 12:00'}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}

