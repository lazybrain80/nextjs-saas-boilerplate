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
  Input,
} from '@/design/components'

type ProfileFormValues = {
  name: string
  age: number
  company: string
  email: string
  phone: string
  address: string
}

const HorizontalFormField = ({
  name,
  label,
  type,
  placeholder,
  control,
}: {
  name: keyof ProfileFormValues
  label: string
  type: string
  placeholder: string
  control: any
}) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem className="flex items-center space-x-4">
        <FormLabel className="w-1/5">{label}</FormLabel>
        <FormControl>
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className="w-4/5 border rounded-2xl px-3 py-2"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export const SimpleForm = () => {
  const profileForm = useForm<ProfileFormValues>({
    defaultValues: {
      name: '',
      age: 0,
      company: '',
      email: '',
      phone: '',
      address: '',
    },
  })

  const { control, handleSubmit } = profileForm

  const onSubmit: SubmitHandler<ProfileFormValues> = data => {
    console.log('Form Data:', data)
  }

  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader className="border-b">
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>Simple form example</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <Form {...profileForm}>
            <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <HorizontalFormField
                name="name"
                label="Name"
                type="text"
                placeholder="Enter your name"
                control={control}
              />
              <HorizontalFormField
                name="age"
                label="Age"
                type="number"
                placeholder="Enter your age"
                control={control}
              />
              <HorizontalFormField
                name="company"
                label="Company"
                type="text"
                placeholder="Enter your company"
                control={control}
              />
              <HorizontalFormField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                control={control}
              />
              <HorizontalFormField
                name="phone"
                label="Phone"
                type="text"
                placeholder="Enter your phone"
                control={control}
              />
              <HorizontalFormField
                name="address"
                label="Address"
                type="text"
                placeholder="Enter your address"
                control={control}
              />

              {/* Submit Button */}
              <div className="flex justify-end w-full mt-4">
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
