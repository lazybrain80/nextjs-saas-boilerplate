'use client'

import React, { useState, useEffect } from "react";

import { useTranslations } from 'next-intl'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Card,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'

interface FormEvent extends React.FormEvent<HTMLFormElement> {}
interface Event {
  title: string;
  start: string;
  end: string;
  description: string;
  backgroundColor: string;
}

interface SelectInfo {
  startStr: string;
  endStr: string;
}

interface DropInfo {
  event: {
    title: string;
    startStr: string;
    endStr: string;
  };
}


const CalendarPage = () => {
  const t = useTranslations('CalendarApp')

  const [events, setEvents] = useState<{ title: string; start: string; end: string; description: string; backgroundColor: string; }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    backgroundColor: "#4F46E5"
  });

  useEffect(() => {
    // Mock data
    const mockEvents = [
      {
        title: "Team Meeting",
        start: "2024-01-10T10:00:00",
        end: "2024-01-10T11:30:00",
        description: "Weekly team sync",
        backgroundColor: "#4F46E5"
      },
      {
        title: "Project Review",
        start: "2024-01-15T14:00:00",
        end: "2024-01-15T16:00:00",
        description: "Q1 Project Review",
        backgroundColor: "#10B981"
      }
    ];
    setEvents(mockEvents);
  }, []);


  const handleDateSelect = (selectInfo: SelectInfo) => {
    setNewEvent({
      ...newEvent,
      start: selectInfo.startStr,
      end: selectInfo.endStr
    });
    setShowModal(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description || "",
      backgroundColor: clickInfo.event.backgroundColor || "#4F46E5"
    });
    setShowModal(true);
  };

  const handleEventDrop = (dropInfo: DropInfo) => {
    const updatedEvents = events.map(event => {
      if (event.title === dropInfo.event.title) {
        return {
          ...event,
          start: dropInfo.event.startStr,
          end: dropInfo.event.endStr
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedEvent) {
      const updatedEvents = events.map(event =>
        event.title === selectedEvent.title ? newEvent : event
      );
      setEvents(updatedEvents);
    } else {
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
    setSelectedEvent(null);
    setNewEvent({
      title: "",
      start: "",
      end: "",
      description: "",
      backgroundColor: "#4F46E5"
    });
  };

  const handleDelete = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter(
        event => event.title !== selectedEvent.title
      );
      setEvents(updatedEvents);
      setShowModal(false);
      setSelectedEvent(null);
    }
  };

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={t('title')} />
      
      {/* Calendar */}
      <Card className='rounded-2xl shadow-lg h-[90%] bg-gray-100 flex'>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          height="auto"
        />

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedEvent ? "Edit Event" : "Add New Event"}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedEvent(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icons.Close size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="datetime-local"
                    value={newEvent.start}
                    onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input
                    type="datetime-local"
                    value={newEvent.end}
                    onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Color</label>
                  <input
                    type="color"
                    value={newEvent.backgroundColor}
                    onChange={(e) => setNewEvent({ ...newEvent, backgroundColor: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  {selectedEvent && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete
                    </button>
                  )}
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {selectedEvent ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      </Card>
    </div>
  )
}

export default CalendarPage