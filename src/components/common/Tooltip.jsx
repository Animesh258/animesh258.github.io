import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const Tooltip = ({ label, children, side = "top", align = "center" }) => (
  <TooltipPrimitive.Provider delayDuration={200}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          className="
            z-50 rounded-md px-2 py-1 text-xs font-medium
            bg-accent-primary text-white shadow-lg
            data-[state=delayed-open]:animate-in
            data-[state=closed]:animate-out
            data-[side=top]:slide-in-from-bottom-1
            data-[side=bottom]:slide-in-from-top-1
            data-[side=left]:slide-in-from-right-1
            data-[side=right]:slide-in-from-left-1
          "
        >
          {label}
          <TooltipPrimitive.Arrow className="fill-accent-primary" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export default Tooltip;
