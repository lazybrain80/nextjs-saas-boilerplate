import { Card, CardHeader, CardTitle, CardContent, ChipsInput } from '@/design/components'

export const StyledChipInput = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Styled Chip Input </div>
            <></>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <ChipsInput
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            chipClassName="bg-green-100 text-green-700 px-2 py-1 rounded-lg hover:bg-green-200 border border-green-800"
            inputClassName="text-gray-700 placeholder-gray-400 focus:outline-none"
            errorClassName="text-red-600 font-semibold"
            placeholder="Add a chip..."
            initialChips={['Styled Chip 1', 'Styled Chip 2']}
            maxChips={10}
            showFooter
            onChange={chips => console.log('Chips:', chips)}
            onChipAdd={chip => console.log('Chip added:', chip)}
            onChipRemove={chip => console.log('Chip removed:', chip)}
            footerText="You can add up to"
          />
        </div>
      </CardContent>
    </Card>
  )
}
