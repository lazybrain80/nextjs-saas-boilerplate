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
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { cn } from '@/libs/utils'

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
import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport, } from '@/design/components'

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink
        href="https://github.com/ecklf/tailwindcss-radix"
        className={cn(
          'px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900',
          'text-sm font-medium text-gray-700 dark:text-gray-100'
        )}
      >
        GitHub
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuIndicator />
  <NavigationMenuViewport />
</NavigationMenu>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const NavigationMenuExample = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[24rem] lg:w-[36rem] p-3">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
                  <NavigationMenuLink className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">Unstyled, accessible components for React.</p>
                  </NavigationMenuLink>
                </div>

                <div className="col-span-4 w-full flex flex-col space-y-3 bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
                  <div className="w-full bg-white dark:bg-gray-700 h-12 rounded-md" />
                  <div className="w-full bg-white dark:bg-gray-700 h-12 rounded-md" />
                  <div className="w-full bg-white dark:bg-gray-700 h-12 rounded-md" />
                  <div className="w-full bg-white dark:bg-gray-700 h-12 rounded-md" />
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[16rem] lg:w-[18rem] p-3">
              <div className="w-full flex flex-col space-y-2">
                <NavigationMenuLink
                  className={cn(
                    'w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md',
                    'focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                  )}
                  href="https://tailwindcss.com"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Tailwind CSS
                  </span>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                    A utility-first CSS framework for rapidly building custom user interfaces.
                  </div>
                </NavigationMenuLink>

                <NavigationMenuLink
                  className={cn(
                    'w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md',
                    'focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                  )}
                  href="https://www.radix-ui.com"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Radix UI
                  </span>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                    An open-source UI component library for building high-quality, accessible design
                    systems and web apps.
                  </div>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://github.com/ecklf/tailwindcss-radix"
            className={cn(
              'px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900',
              'text-sm font-medium text-gray-700 dark:text-gray-100'
            )}
          >
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}
export const SimpleNavMenu = () => {
  return (
    <Card className="rounded-2xl bg-white h-1/2">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>Simple Navigation Menu</div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <NavigationMenuExample />
      </CardContent>
    </Card>
  )
}
