'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BookingFormProps {
  selectedDate?: Date
  selectedTime?: string
}

export function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const formattedDate = selectedDate?.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Book Your Session</h2>
      
      {selectedDate && selectedTime && (
        <div className="mb-4 text-sm text-muted-foreground">
          <p>Selected Date & Time</p>
          <p className="font-medium text-foreground">{formattedDate}</p>
          <p className="font-medium text-foreground">{selectedTime}</p>
        </div>
      )}

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="notes" className="text-sm font-medium">
            Notes
          </label>
          <Textarea id="notes" placeholder="Add any notes here" />
        </div>

        <Button className="w-full" type="submit">
          Book Session
        </Button>
      </form>
    </div>
  )
}

