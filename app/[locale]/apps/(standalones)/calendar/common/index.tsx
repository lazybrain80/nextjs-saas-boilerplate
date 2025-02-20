
export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
export interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  backgroundColor: string;
}

export const predefinedColors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Soft Pink", hex: "#FFB6C1" },
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Mint Green", hex: "#98FF98" },
];

export const EventColorSelector = ({ field }: { field: any }) => {
  return (
    <div className="w-full flex items-center space-x-2">
      <select
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        className="w-full text-white px-4 py-2 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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