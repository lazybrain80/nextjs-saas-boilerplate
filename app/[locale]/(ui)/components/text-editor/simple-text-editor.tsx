'use client'

import { useState } from 'react'
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
  TextEditor,
} from '@/design/components'
import { Editor } from '@tiptap/react'
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
import { TextEditor } from '@/design/components'

<TextEditor
  onCreate={editor => setEditor(editor)}
  onTextCountChange={count => setTotalText(count)}
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleTextEditor = () => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const [totalText, setTotalText] = useState<number>(0)

  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> TextEditor example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <TextEditor
            className="w-full"
            onCreate={editor => setEditor(editor)}
            onTextCountChange={count => setTotalText(count)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
