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
  Toggle,
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
            {`import { Toggle } from '@/design/components'

<Toggle
  className="w-40 h-40 bg-red-500 text-white"
  defaultPressed={false}
>
  <Icons.Check className="w-20 h-20" />
</Toggle>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleToggle = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Toggle examples </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <Toggle className="w-32 h-32 bg-blue-500 text-white rounded-full" defaultPressed={false}>
            <Icons.Check className="w-16 h-16" />
          </Toggle>
          <Toggle
            className="w-40 h-40 bg-red-500 text-white rounded-md border-4 border-black"
            defaultPressed={false}
          >
            <Icons.Check className="w-20 h-20" />
          </Toggle>
          <Toggle className="w-48 h-48 rounded-lg" defaultPressed={false}>
            <Icons.Check className="w-24 h-24" />
          </Toggle>
          <Toggle className="w-64 h-64 bg-green-500 text-white rounded-xl" defaultPressed={true}>
            <Icons.Check className="w-48 h-48" />
          </Toggle>
          <Toggle
            className="w-72 h-72 rounded-3xl shadow-xl border border-cyan-500"
            defaultPressed={true}
          >
            <Icons.Check className="w-64 h-64" />
          </Toggle>
        </div>
      </CardContent>
    </Card>
  )
}
