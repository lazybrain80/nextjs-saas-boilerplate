import Image from "next/image";

export const LeadMain = ({
  banner,
  title,
  description,
  buttons,
}: {
  banner: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="mt-20 ext-left">
          {banner}
        </div>
        <div className="my-10 text-left text-5xl font-bold tracking-tight">
          {title}
        </div>
        <div className="my-10 max-w-screen-md text-xl text-muted-foreground">
          {description}
        </div>
        <div className="my-20 mt-8 flex gap-x-5 gap-y-3 max-sm:flex-col">
          {buttons}
        </div>
      </div>
      <Image
        className="my-20"
        src="/images/landing/lead_main.png"
        width={639}
        height={450}
        alt="lead"
      />
    </div>
  </>
);