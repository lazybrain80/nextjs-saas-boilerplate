
'use client'

import { ReactNode } from 'react'
import { cn } from '@/libs/utils'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/design/components/ui'

interface CustomAccordionProps {
  className?: string
  children: ReactNode
  type: 'single' | 'multiple'
  collapsible?: boolean
}

interface CustomAccordionItemProps {
  className?: string
  children: ReactNode
  disabled?: boolean
  value: string
}

interface CustomAccordionTriggerProps {
  className?: string
  children: ReactNode
}

interface CustomAccordionContentProps {
  className?: string
  children: ReactNode
}

const CustomAccordion = ({
  className,
  children,
  ...props
}: CustomAccordionProps) => {
  return (
    <Accordion 
      className={cn(
        'rounded-2xl border p-6 mt-6 space-y-4',
        className
      )} 
      {...props} 
      type={props.type}
    >
      {children}
    </Accordion>
  )
}

const CustomAccordionItem = ({
  className, 
  children, 
  disabled, 
  value, 
  ...props
}: CustomAccordionItemProps) => {
  return (
    <AccordionItem 
      className={cn(
        'rounded-2xl data-[state=open]:shadow-md',
        className
      )}
      disabled={disabled}
      value={value}
      {...props}
    >
      {children}
    </AccordionItem>
  )
}

const CustomAccordionTrigger = ({
  className, 
  children, 
  ...props 
}: CustomAccordionTriggerProps) => {
  return (
    <AccordionTrigger
      className={cn(
        'rounded-xl text-xl font-bold',
        className
      )} 
      {...props}
    >
      {children}
    </AccordionTrigger>
  )
}

const CustomAccordionContent = ({ className, children, ...props }: CustomAccordionContentProps) => {
  return (
    <AccordionContent
      className={cn(className)}
      {...props}
    >
      {children}
    </AccordionContent>
  )
}

export const CustomAccordionCard = () => {
  return (
    <Card className='rounded-2xl shadow-lg'>
      <CardHeader
        className='border-b border-slate-200'
        title='Accordion'
      >
        <CardTitle>Custom Accordions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-flow-col grid-cols-2 gap-6 my-6'>
          <Card className='col-span-1 rounded-2xl border border-slate-200'>
            <CardHeader
              className='border-b border-slate-200'
              title='Accordion'
            >
              <CardTitle>Single type</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomAccordion
                className='rounded-2xl mt-6'
                type='single'
                collapsible
              >
                <CustomAccordionItem
                  value='item-1'>
                  <CustomAccordionTrigger>
                    Accordion Item 1
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value='item-2'>
                  <CustomAccordionTrigger>
                    Accordion Item 2
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value='item-3'>
                  <CustomAccordionTrigger>
                    Accordion Item 3
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
              </CustomAccordion>
            </CardContent>
          </Card>
          <Card className='col-span-1 rounded-2xl border border-slate-200'>
            <CardHeader
              className='border-b border-slate-200'
              title='Accordion'
            >
              <CardTitle>Multiple type</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomAccordion
                type='multiple'
              >
                <CustomAccordionItem
                  value='item-1'
                >
                  <CustomAccordionTrigger
                  >
                    <div className='flex items-center justify-between'>
                      <h2 className='text-xl font-bold'>Accordion Item 1</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value='item-2'>
                  <CustomAccordionTrigger>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-xl font-bold'>Accordion Item 2</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value='item-3'>
                  <CustomAccordionTrigger>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-xl font-bold'>Accordion Item 3</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                      <div className='flex items-center'>
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
              </CustomAccordion>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}