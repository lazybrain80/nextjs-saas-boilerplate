'use client'

import React, { useEffect } from 'react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  Button,
  Input,
  Textarea,
  Form,
  FormItem,
  FormLabel,
  FormDescription,
  FormField,
  FormControl,
  FormMessage
} from '@/design/components/ui'
import { useForm } from 'react-hook-form'
import * as Icons from '@/design/icons'

interface newEventDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onCloseAction: () => void
  onSubmitAction: (data: Record<string, any>) => void
}

const predefinedColors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Soft Pink", hex: "#FFB6C1" },
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Mint Green", hex: "#98FF98" },
];

const EventColorSelector = ({ field }: { field: any }) => {
  return (
    <div className="w-full flex items-center space-x-2">
      <select
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        className="w-full text-white px-4 py-2 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ backgroundColor: field.value }}
      >
        {predefinedColors.map((color) => (
          <option key={color.hex} value={color.hex}>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export const NewEventDialog = ({ className, open, onSubmitAction, onCloseAction, ...props }: newEventDialogProps) => {
  const eventForm = useForm({
    defaultValues: {
      title: '',
      description: '',
      start: '',
      end: '',
      color: predefinedColors[0].hex
    }
  })
  const { control } = eventForm

  useEffect(() => {
    if (open) {
      eventForm.reset()
      
      eventForm.setValue('start', new Date().toISOString().split('T')[0])
      eventForm.setValue('end', new Date().toISOString().split('T')[0])
    }
  }, [open, eventForm])

  const onSubmit = async (data: any) => {
    console.log('onSubmit:', data)
  };

  return (
    <div className={cn(className)}>
      <Dialog open={open} {...props}>
        <DialogContent enableClose={false}>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>New Event</DialogTitle>
              <DialogClose onClick={() => onCloseAction()}>
                <Icons.Close />
              </DialogClose>
            </div>
          </DialogHeader>
          <Form {...eventForm}>
            <form onSubmit={eventForm.handleSubmit(onSubmit)} className="space-y-4">
              {/* event name field */}
              <FormField
                control={control}
                name="title"
                rules={{ required: 'Event name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Event Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event desc field */}
              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Event Description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event start date field */}
              <FormField
                control={control}
                name="start"
                rules={{ required: true  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" />
                    </FormControl>
                    <FormDescription>
                      Enter the start date of the event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event end date field */}
              <FormField
                control={control}
                name="end"
                rules={{ required: true  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" />
                    </FormControl>
                    <FormDescription>
                      Enter the start date of the event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event color field */}
              <FormField
                control={control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Color</FormLabel>
                    <FormControl>
                      <EventColorSelector field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <DialogFooter>
              <Button type={'submit'}>Save</Button>
              <Button onClick={() => onCloseAction()}>Cancel</Button>
            </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}