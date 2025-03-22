import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/design/components'
import { cn } from '@/libs/utils'
import * as Icons from '@/design/icons'

export const EarningsCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle
          className='m-2'
        >
          <Icons.Crown
            className='h-8 w-8 text-white'
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='ml-2'>
          <span className='text-xl text-white font-bold mr-1'>445.8</span>
          <span className='text-sm text-white'>-2%</span>
        </div>
        <div className='ml-2 text-white'>Earnings</div>
      </CardContent>
    </Card>
  )
}