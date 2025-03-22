'use client'

import { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/design/components'
import { orderStatus } from '.'


interface SelectInvoiceStatusProps {
  className?: string
  status: string
  onStatusChange?: (status: string) => void
}


export const SelectInvoiceStatus = ({ className, status, onStatusChange }: SelectInvoiceStatusProps) => {
  const [currentStatus, setCurrentStatus] = useState('')
  
  useEffect(() => {
    setCurrentStatus(status)
  }, [status])

  const handleStatusChange = (status: string) => {
    setCurrentStatus(status)
    onStatusChange?.(status)
  }

  return (
    <div className={className}>
      <Select value={currentStatus} onValueChange={handleStatusChange}>
        <SelectTrigger>
            <SelectValue aria-label={currentStatus}>{currentStatus}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.values(orderStatus).map((status) => (
            <SelectItem key={status} value={status}>
              {(status)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}