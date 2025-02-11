'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  CardContent,
  CardFooter,
  TextEditor
} from '@/design/components/ui'


export const InputCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <TextEditor />
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
)
}