import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/design/components/ui'
import { cn } from '@/libs/utils'
import * as Icons from '@/design/icons'

export const SalesCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle
          className='m-2'
        >
          <Icons.DollarSignCircle
            className='h-8 w-8 text-white'
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='ml-2'>
          <span className='text-xl text-white font-bold mr-1'>34534</span>
          <span className='text-sm text-white'>+12%</span>
        </div>
        <div className='ml-2 text-white'>Sales</div>
      </CardContent>
    </Card>
  )
}