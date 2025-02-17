export const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) => (
  <div className='rounded-xl border border-border bg-card p-5'>
    <div className='size-12 rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-2 [&_svg]:stroke-white [&_svg]:stroke-2'>
      {icon}
    </div>

    <div className='mt-2 text-lg font-bold'>{title}</div>

    <div className='my-3 w-8 border-t border-purple-400' />

    <div className='mt-2 text-muted-foreground'>{children}</div>
  </div>
)
