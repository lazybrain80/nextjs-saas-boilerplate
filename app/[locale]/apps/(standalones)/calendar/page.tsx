'use client'

import '@/styles/fullcalendar.css'
import React, { useState, useEffect } from 'react'

import { useTranslations } from 'next-intl'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/core'
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Card,
} from '@/design/components/ui'
import { Event, generateId, predefinedColors } from './common'
import { EditEventDialog, NewEventDialog } from './dialogs'

interface SelectInfo {
  startStr: string
  endStr: string
}

interface DropInfo {
  event: {
    title: string
    startStr: string
    endStr: string
  }
}

const CalendarPage = () => {
  const t = useTranslations('CalendarApp')

  const [events, setEvents] = useState<Event[]>([])
  const [showNewModal, setShowNewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [newEvent, setNewEvent] = useState({
    id: '',
    title: '',
    start: '',
    end: '',
    description: '',
    backgroundColor: predefinedColors[0].hex
  })

  useEffect(() => {
    // Mock data
    const mockEvents = [
      {
        id: generateId(),
        title: 'Team Meeting',
        start: '2025-02-10T10:00',
        end: '2025-02-20T11:30',
        description: 'Weekly team sync',
        backgroundColor: predefinedColors[3].hex
      },
      {
        id: generateId(),
        title: 'Project Review',
        start: '2025-02-15T14:00',
        end: '2025-02-17T16:00',
        description: 'Q1 Project Review',
        backgroundColor: predefinedColors[4].hex
      }
    ]
    setEvents(mockEvents)
  }, [])

  const handleDateSelect = (selectInfo: SelectInfo) => {
    setNewEvent({
      ...newEvent,
      start: selectInfo.startStr,
      end: selectInfo.endStr
    })
    setShowNewModal(true)
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description || '',
      backgroundColor: clickInfo.event.backgroundColor || '#4F46E5'
    })
    setShowEditModal(true)
  }

  const handleEventDrop = (dropInfo: DropInfo) => {
    const updatedEvents = events.map(event => {
      if (event.title === dropInfo.event.title) {
        return {
          ...event,
          start: dropInfo.event.startStr,
          end: dropInfo.event.endStr
        }
      }
      return event
    })
    setEvents(updatedEvents)
  }

  const submitNewEvent = (newEvent: Event) => {
    setEvents([...events, newEvent])
  }

  const submitEditEvent = (updateEvent: Event) => {
    const updatedEvents = events.map(event => {
      if (event.id === updateEvent.id) {
        return {
          ...updateEvent
        }
      }
      return event
    })
    setEvents(updatedEvents)
  }

  const submitDeleteEvent = (id: string) => {
    const updatedEvents = events.filter(event => event.id !== id)
    setEvents(updatedEvents)
  }

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={t('page_title')} />
      
      {/* Calendar */}
      <Card className='rounded-2xl shadow-lg h-[90%] bg-gray-100 flex'>
        <div className='bg-white rounded-lg shadow-lg p-4 md:p-6 h-full'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
            height='auto'
            eventClassNames={
              'bg-transparent hover:bg-slate-800/60 p-1 text-xs border-none'
            }
          />

          <NewEventDialog
            open={showNewModal}
            onCloseAction={()=> {
              setShowNewModal(false)
            }}
            onSubmitAction={submitNewEvent}
          />

          {selectedEvent && (
            <EditEventDialog
              open={showEditModal}
              event={selectedEvent}
              onCloseAction={()=> {
                setShowEditModal(false)
              }}
              onDeleteAction={submitDeleteEvent}
              onSubmitAction={submitEditEvent}
            />
          )}
        </div>
      </Card>
    </div>
  )
}

export default CalendarPage