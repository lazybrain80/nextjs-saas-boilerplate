import { Check } from "@/design/icons";

export const PricingFeature = (props: { children: React.ReactNode }) => (
  <li className="flex items-center text-muted-foreground">
    <Check className="mr-1 size-6 text-purple-400" />
    {props.children}
  </li>
);
