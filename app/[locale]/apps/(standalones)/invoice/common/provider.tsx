'use client'

import { createContext, useContext, useState, useMemo, useLayoutEffect } from 'react'
import { Invoice } from '.'

interface InvoiceProviderProp {
  children: React.ReactNode,
  invoices: Invoice[]
}


interface InvoiceContextType {
  invoices: Invoice[];
  setInvoices: (newInvoices: Invoice[]) => void;
  addInvoice: (newInvoice: Invoice) => void;
  deleteInvoice: (invoiceId: string) => void;
  updateInvoice: (updatedInvoice: Invoice) => void;
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined)

export const InvoiceProvider: React.FC<InvoiceProviderProp> = ({ children, invoices }) => {
  const [invoiceCache, setInvoiceCache] = useState<Invoice[]>([])

  useLayoutEffect(() => {
    setInvoiceCache(invoices)
  }, [invoices])

  const setInvoices = (newInvoices: Invoice[]) => {
    setInvoiceCache(newInvoices)
  }

  const addInvoice = (newInvoice: Invoice) => {
    setInvoiceCache((prevInvoices) => [...prevInvoices, newInvoice])
  }

  const addInvoices = (newInvoices: Invoice[]) => {
    setInvoiceCache((prevInvoices) => [...prevInvoices, ...newInvoices])
  }

  const deleteInvoice = (invoiceId: string) => {
    setInvoiceCache((prevInvoices) => prevInvoices.filter((inv) => inv.id !== invoiceId))
  }

  const updateInvoice = (updatedInvoice: Invoice) => {
    setInvoiceCache((prevInvoices) => prevInvoices.map((inv) => inv.id === updatedInvoice.id ? updatedInvoice : inv))
  }

  const contextValue = useMemo(() => ({
    invoices: invoiceCache,
    setInvoices,
    addInvoice,
    addInvoices,
    deleteInvoice,
    updateInvoice,
  }), [invoiceCache])

  return (
    <InvoiceContext.Provider value={contextValue}>
      {children}
    </InvoiceContext.Provider>
  )
}

export const useInvoices = () => {
  const context = useContext(InvoiceContext)
  if (context === undefined) {
    throw new Error('useInvoice must be used within a InvoiceProvider')
  }
  return context
}
