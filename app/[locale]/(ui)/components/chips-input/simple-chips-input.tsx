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
  ChipsInput,
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
          <DialogTitle>ChipsInput Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { ChipsInput } from '@/design/components'

<ChipsInput
  placeholder="Add a chip..."
  initialChips={['Example Chip 1', 'Example Chip 2']}
  showFooter
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleChipInput = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Simple Chip Input </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <ChipsInput
            placeholder="Add a chip..."
            initialChips={['Example Chip 1', 'Example Chip 2']}
            showFooter
          />
        </div>
      </CardContent>
    </Card>
  )
}
