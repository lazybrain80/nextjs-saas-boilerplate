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
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
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
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from '@/design/components'

<Sheet>
  <SheetTrigger asChild>
    <Button>
      <Icons.Menu className="w-5 h-5" />
    </Button>
  </SheetTrigger>
  <SheetPortal>
    <SheetOverlay />
    <SheetContent side={side} className="max-w-md">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription>{description}</SheetDescription>
      </SheetHeader>
      <div className="p-4">
        <p>Here is some content inside the sheet.</p>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </SheetPortal>
</Sheet>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
interface SampleSheetProps {
  title: string
  description: string
  side: 'top' | 'bottom' | 'left' | 'right'
}

const SampleSheet = ({ title, description, side = 'right' }: SampleSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Icons.Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent side={side} className="max-w-md">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p>Here is some content inside the sheet.</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  )
}

export const SimpleSheet = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Sheet example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          {/** component sample */}
          <div className="text-center">
            <p className="font-semibold">Right Sheet</p>
            <SampleSheet
              title="Sample Sheet"
              description="This is a sample sheet component."
              side="right"
            />
          </div>
          {/** component sample */}
          <div className="text-center">
            <p className="font-semibold">Left Sheet</p>
            <SampleSheet
              title="Sample Sheet"
              description="This is a sample sheet component."
              side="left"
            />
          </div>
          {/** component sample */}
          <div className="text-center">
            <p className="font-semibold">Top Sheet</p>
            <SampleSheet
              title="Sample Sheet"
              description="This is a sample sheet component."
              side="top"
            />
          </div>
          {/** component sample */}
          <div className="text-center">
            <p className="font-semibold">Bottom Sheet</p>
            <SampleSheet
              title="Sample Sheet"
              description="This is a sample sheet component."
              side="bottom"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
