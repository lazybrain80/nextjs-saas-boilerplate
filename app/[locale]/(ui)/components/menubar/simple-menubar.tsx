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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
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
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut
} from '@/design/components'

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarPortal>
      <MenubarContent>
        <MenubarLabel>File Options</MenubarLabel>
        <MenubarItem>New File</MenubarItem>
        <MenubarItem>Open File</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Save</MenubarItem>
        <MenubarItem>Save As...</MenubarItem>
      </MenubarContent>
    </MenubarPortal>
  </MenubarMenu>
</Menubar>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const MenubarExample = () => {
  return (
    <Menubar className="space-x-6">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent>
            <MenubarLabel>File Options</MenubarLabel>
            <MenubarSeparator />
            <MenubarItem>New File</MenubarItem>
            <MenubarItem>Open File</MenubarItem>
            <MenubarSeparator />
            <MenubarLabel>Save Options</MenubarLabel>
            <MenubarItem>Save</MenubarItem>
            <MenubarItem>Save As...</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Edit Options</MenubarLabel>
          <MenubarSeparator />
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Word Wrap</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>View Options</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value="light">
            <MenubarRadioItem value="light">Light Mode</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark Mode</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Tools Options</MenubarLabel>
          <MenubarGroup>
            <MenubarItem>Spell Check</MenubarItem>
            <MenubarItem>Grammar Check</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>More Tools</MenubarSubTrigger>
            <MenubarSeparator />
            <MenubarPortal>
              <MenubarSubContent>
                <MenubarItem>Developer Tools</MenubarItem>
                <MenubarItem>Extensions</MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Help Options</MenubarLabel>
          <MenubarSeparator />
          <MenubarItem>
            About
            <MenubarShortcut>Ctrl+H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const SimpleMenubar = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Menubar example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <MenubarExample />
        </div>
      </CardContent>
    </Card>
  )
}
