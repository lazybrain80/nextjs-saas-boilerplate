import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/design/components/ui'
import { cn } from '@/libs/utils'
import * as Icons from '@/design/icons'

export const RefundsCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle
          className='m-2'
        >
          <Icons.CircleCheckBig
            className='h-8 w-8 text-white'
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='ml-2'>
          <span className='text-xl text-white font-bold mr-1'>2341</span>
          <span className='text-sm text-white'>+23%</span>
        </div>
        <div className='ml-2 text-white'>Refunds</div>
      </CardContent>
    </Card>
  )
}