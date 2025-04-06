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
  Label,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { CustomDropdownMenu } from './custom-dropdown-menu'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90%] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`import { 
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from '@/design/components'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuArrow />
    <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        Item 1 <DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Item 2 <DropdownMenuShortcut>⌘2</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked>Checkbox Item</DropdownMenuCheckboxItem>
    <DropdownMenuRadioGroup value="option1">
      <DropdownMenuRadioItem value="option1">Radio Option 1</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="option2">Radio Option 2</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
        <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const BottomDropdownMenu = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Bottom side Example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: bottom </Label>
              <Label>Align: start</Label>
            </div>
            <CustomDropdownMenu align="start" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: bottom </Label>
              <Label>Align: center</Label>
            </div>
            <CustomDropdownMenu align="center" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: bottom </Label>
              <Label>Align: end</Label>
            </div>
            <CustomDropdownMenu align="end" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
