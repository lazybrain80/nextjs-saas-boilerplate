'use client'

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  useForm,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  SubmitHandler,
} from '@/design/components'

type FormValues = {
  email: string
  name: string
  address: string
  age: number
}

export const SimpleHorizontalForm = () => {
  const profileForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      name: '',
      address: '',
      age: 0,
    },
  })

  const { control: formControl, handleSubmit } = profileForm

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log('Form Data:', data)
  }

  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>Simple form example</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Form {...profileForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <FormField
                name="email"
                control={formControl}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4">
                    <FormLabel className="w-32">Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="border rounded px-3 py-2 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name Field */}
              <FormField
                name="name"
                control={formControl}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4">
                    <FormLabel className="w-32">Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your name"
                        className="border rounded px-3 py-2 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                name="address"
                control={formControl}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4">
                    <FormLabel className="w-32">Address</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your address"
                        className="border rounded px-3 py-2 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Age Field */}
              <FormField
                name="age"
                control={formControl}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-4">
                    <FormLabel className="w-32">Age</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        placeholder="Enter your age"
                        className="border rounded px-3 py-2 w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  )
}
