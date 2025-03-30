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
  FileImporter,
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
import { FileImporter } from '@/design/components'

<FileImporter
  onFileDropedAction={file => {
    console.log('File dropped:', file.name)
  }}
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleFileImporter = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> FileImporter example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <FileImporter
            className="bg-slate-400/10"
            onFileDropedAction={file => {
              console.log('File dropped:', file.name)
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
