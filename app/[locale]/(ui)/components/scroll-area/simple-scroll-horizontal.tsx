import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ScrollArea,
  ScrollBar,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`import { 
  ScrollArea,
  ScrollBar,
} from '@/design/components'

<ScrollArea className="h-40 w-full rounded-lg border">
  <div className="flex space-x-4 p-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="p-4 bg-gray-100 rounded w-40">
        Item {i + 1}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const ScrollAreaHorizontal = () => {
  return (
    <Card className="rounded-2xl bg-white h-1/2">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Scroll Area - Horizontal</div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          {/* component sample */}
          <ScrollArea className="h-40 w-full rounded-lg border">
            <div className="flex space-x-4 p-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="p-4 bg-gray-100 rounded w-40">
                  Item {i + 1}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}
