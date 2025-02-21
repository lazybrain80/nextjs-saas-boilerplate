export const generateId = () => '_' + Math.random().toString(36).substr(2, 9)
export interface Event {
  id: string
  title: string
  start: string
  end: string
  description: string
  backgroundColor: string
}

export const predefinedColors = [
  { name: 'Dark Red', hex: '#8B0000' },
  { name: 'Dark Blue', hex: '#00008B' },
  { name: 'Deep Pink', hex: '#FF1493' },
  { name: 'Dodger Blue', hex: '#1E90FF' },
  { name: 'Forest Green', hex: '#228B22' },
]

export const EventColorSelector = ({ field }: { field: any }) => {
  return (
    <div className='w-full flex items-center space-x-2'>
      <select
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        className='w-full text-white px-4 py-2 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        style={{ backgroundColor: field.value }}
      >
        {predefinedColors.map((color) => (
          <option key={color.hex} value={color.hex}>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  )
}