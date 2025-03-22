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
import { Event, EventColorSelector, predefinedColors, generateId } from '../common'

interface newEventDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onCloseAction: () => void
  onSubmitAction: (data: Event) => void
}

export const NewEventDialog = ({ className, open, onSubmitAction, onCloseAction, ...props }: newEventDialogProps) => {
  const t = useTranslations('CalendarApp')

  const eventForm = useForm({
    defaultValues: {
      id: '',
      title: '',
      description: '',
      start: '',
      end: '',
      backgroundColor: predefinedColors[0].hex
    }
  })
  const { control } = eventForm

  useEffect(() => {
    if (open) {
      eventForm.reset()
      
      const localDatetime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)
      eventForm.setValue('start', localDatetime)
      eventForm.setValue('end', localDatetime)
    }
  }, [open, eventForm])

  const onSubmit = async (data: Event) => {
    data.id = generateId()
    onSubmitAction(data)
    onCloseAction()
  }

  return (
    <div className={cn(className)}>
      <Dialog open={open} {...props}>
        <DialogContent enableClose={false}>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>{t('new_event')}</DialogTitle>
              <DialogClose onClick={() => onCloseAction()}>
                <Icons.Close />
              </DialogClose>
            </div>
          </DialogHeader>
          <Form {...eventForm}>
            <form onSubmit={eventForm.handleSubmit(onSubmit)} className='space-y-4'>
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