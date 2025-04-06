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
  AnimatedGradientText,
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
            {`
import { AnimatedGradientText } from '@/design/components'

<AnimatedGradientText
  className="text-2xl font-bold"
  text="this is a simple gradient text"
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleGradientText = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> GradientText example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <AnimatedGradientText
            className="text-2xl font-bold"
            text="this is a simple gradient text"
          />
          <AnimatedGradientText
            className="text-xl font-medium"
            text="another gradient text example"
          />
          <AnimatedGradientText className="text-lg font-light" text="yet another example" />
        </div>
      </CardContent>
    </Card>
  )
}
