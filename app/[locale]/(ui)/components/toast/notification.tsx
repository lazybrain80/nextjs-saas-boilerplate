import React from 'react'
import { createContext, useCallback, useContext, useState, useMemo, useLayoutEffect } from 'react'
import * as Icons from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '@/design/components'

interface NotificationContextType {
  success: (message: string) => void
  error: (message: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

interface Notification {
  message: string
  type: 'success' | 'error'
}

interface NotificationsProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  children: React.ReactNode
}

const Notifications: React.FC<NotificationsProps> = props => {
  const { position, children } = props
  const [notifications, setNotifications] = React.useState<Map<string, Notification>>(new Map())
  const isPositionedTop = position === 'top-left' || position === 'top-right'

  const handleAddToast = useCallback((toast: Notification) => {
    setNotifications(prev => {
      const newMap = new Map(prev)
      newMap.set(String(Date.now()), { ...toast })
      return newMap
    })
  }, [])

  const handleRemoveToast = useCallback((key: string) => {
    setNotifications(prev => {
      const newMap = new Map(prev)
      newMap.delete(key)
      return newMap
    })
  }, [])

  const handleDispatchSuccess = useCallback(
    (message: string) => handleAddToast({ message, type: 'success' }),
    [handleAddToast]
  )

  const handleDispatchError = useCallback(
    (message: string) => handleAddToast({ message, type: 'error' }),
    [handleAddToast]
  )

  return (
    <NotificationContext.Provider
      value={useMemo(
        () => ({
          success: handleDispatchSuccess,
          error: handleDispatchError,
        }),
        [handleDispatchSuccess, handleDispatchError]
      )}
    >
      <ToastProvider>
        {children}
        <AnimatePresence>
          {Array.from(notifications).map(([key, notification]) => {
            return (
              <Toast
                animation={'basic'}
                position={position.includes('right') ? 'right' : 'left'}
                onOpenChange={(open: boolean) => {
                  if (!open) handleRemoveToast(key)
                }}
                key={key}
                asChild
                forceMount
              >
                <motion.li
                  initial={{
                    y: isPositionedTop ? -100 : 100,
                    scale: 0.6,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    scale: 0.9,
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  layout
                >
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <ToastIconContainer aria-hidden type={notification.type}>
                      {notification.type === 'success' ? <Icons.CheckIcon /> : <Icons.Cross2Icon />}
                    </ToastIconContainer>

                    <div>
                      <ToastTitle>{notification.message}</ToastTitle>
                      <ToastDescription>Monday, July 11, 9:55 AM</ToastDescription>
                    </div>
                    <ToastAction altText="Undo">Undo</ToastAction>
                  </div>
                  <ToastClose>
                    <Icons.Cross2Icon />
                  </ToastClose>
                </motion.li>
              </Toast>
            )
          })}
        </AnimatePresence>
        <ToastViewport position={position} />
      </ToastProvider>
    </NotificationContext.Provider>
  )
}

/* -----------------------------------------------------------------------------------------------*/

const ToastIconContainer: React.FC<{ type: 'success' | 'error'; children: React.ReactNode }> = ({
  type,
  children,
}) => (
  <div
    className={`flex items-center justify-center w-6 h-6 rounded-full ${
      type === 'success' ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'
    }`}
  >
    {children}
  </div>
)

/* -----------------------------------------------------------------------------------------------*/

const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within Notifications')
  }
  return context
}

/* -----------------------------------------------------------------------------------------------*/

export { Notifications, useNotification }
