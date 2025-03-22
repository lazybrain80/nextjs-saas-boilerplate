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
} from '@/design/components'
import { useForm } from 'react-hook-form'
import * as Icons from '@/design/icons'
import { Event, EventColorSelector } from '../common'

interface editEventDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  event: Event
  onCloseAction: () => void
  onDeleteAction: (id: string) => void
  onSubmitAction: (data: Event) => void
}

export const EditEventDialog = ({ className, open, event, onSubmitAction, onCloseAction, onDeleteAction, ...props }: editEventDialogProps) => {
  const t = useTranslations('CalendarApp')

  const eventForm = useForm({
    defaultValues: {
      id: '',
      title: '',
      description: '',
      start: '',
      end: '',
      backgroundColor: ''
    }
  })
  const { control } = eventForm

  useEffect(() => {
    if (open) {
      const startDate = new Date(new Date(event.start).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)
      eventForm.setValue('id', event.id)
      eventForm.setValue('title', event.title)
      eventForm.setValue('description', event.description)
      eventForm.setValue('start', startDate)
      if (event.end) {
        eventForm.setValue('end', new Date(new Date(event.end).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16))
      } else {
        eventForm.setValue('end', startDate)
      }
      eventForm.setValue('backgroundColor', event.backgroundColor)
    }
  }, [open, event, eventForm])

  const onSubmit = async (data: Event) => {
    onSubmitAction(data)
    onCloseAction()
  }

  const onDelete = (id: string) => {
    onDeleteAction(id)
    onCloseAction()
  }

  return (
    <div className={cn(className)}>
      <Dialog open={open} {...props}>
        <DialogContent enableClose={false}>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>{t('edit_event')}</DialogTitle>
              <div className='flex items-center space-x-2'>
                <Button variant={'ghost'} onClick={() => onDelete(event.id)}>
                  <Icons.Trash />
                </Button>
                <DialogClose onClick={() => onCloseAction()}>
                  <Icons.Close />
                </DialogClose>
              </div>
            </div>
          </DialogHeader>
          <Form {...eventForm}>
            <form
              className='space-y-4'
              onSubmit={eventForm.handleSubmit(onSubmit)}>
              {/* event name field */}
              <FormField
                control={control}
                name='title'
                rules={{ required: 'Event name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('event_name')}</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Event Name' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event desc field */}
              <FormField
                control={control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('event_desc')}</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder='Event Description' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event start date field */}
              <FormField
                control={control}
                name='start'
                rules={{ required: true  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('event_start')}</FormLabel>
                    <FormControl>
                      <Input {...field} type='datetime-local' />
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
                name='end'
                rules={{ required: true  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('event_end')}</FormLabel>
                    <FormControl>
                      <Input {...field} type='datetime-local' />
                    </FormControl>
                    <FormDescription>
                      Enter the end date of the event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* event color field */}
              <FormField
                control={control}
                name='backgroundColor'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('event_color')}</FormLabel>
                    <FormControl>
                      <EventColorSelector field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <DialogFooter>
              <Button
                className='w-32 rounded-2xl'
                type={'submit'}
              >
                {t('save')}
              </Button>
            </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}