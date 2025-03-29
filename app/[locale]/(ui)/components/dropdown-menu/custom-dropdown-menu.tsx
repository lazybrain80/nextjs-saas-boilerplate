import {
  Button,
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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from '@/design/components'
import * as Icons from '@/design/icons'

interface DropdownMenuProps {
  side?: 'bottom' | 'top' | 'right' | 'left'
  align?: 'start' | 'center' | 'end'
}

export const CustomDropdownMenu = ({ side = 'bottom', align = 'center' }: DropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full bg-slate-500 hover:bg-slate-300">
          <Icons.Menu className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align}>
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
  )
}
