import { Card, CardHeader, CardTitle, CardContent, Label } from '@/design/components'
import { CustomDropdownMenu } from './custom-dropdown-menu'

export const RightDropdownMenu = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Right side Example </div>
            <></>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: right </Label>
              <Label>Align: start</Label>
            </div>
            <CustomDropdownMenu side="right" align="start" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: right </Label>
              <Label>Align: center</Label>
            </div>
            <CustomDropdownMenu side="right" align="center" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <Label>Side: right </Label>
              <Label>Align: end</Label>
            </div>
            <CustomDropdownMenu side="right" align="end" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
