export const state =
  {
    checkElement: {
        initial: "border border-muted bg-background transition-all",
        hover: "hover:border hover:border-muted hover:bg-muted",
        focus: "hover:border hover:border-muted hover:bg-muted",
        focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
        disabled: "hover:border hover:border-muted hover:bg-muted",
        checked: "data-[state=checked]:border data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-onBrand",
        checkedHover: "hover:data-[state=checked]:bg-brandVariant",
        active: "active:scale-[.95]"
    },
    inputElement: {
        initial: "border border-muted bg-background transition-all",
        hover: "hover:border hover:border-muted hover:bg-muted",
        focus: "hover:border hover:border-muted hover:bg-muted",
        focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
        disabled: "hover:border hover:border-muted hover:bg-muted",
        checked: "data-[state=checked]:border data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-onBrand",
        checkedHover: "hover:data-[state=checked]:bg-brandVariant",
        active: "active:scale-[.95]"
    },
    buttonElement: {
        primary: {
            initial: "bg-brand text-onBrand border-none",
            hover: "hover:bg-brandVariant hover:text-onBrand",
            focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
            active: "active:scale-[.95]"
        },
        secondary: {
            initial: "bg-brandLight text-onBrandLight border-none",
            hover: "hover:bg-brandLightVariant hover:text-onBrandLight",
            focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
            active: "active:scale-[.95]"
        },
        accent: {
            initial: "bg-accent text-onAccent border-none",
            hover: "hover:bg-accentVariant hover:text-onAccent",
            focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
            active: "active:scale-[.95]"
        },
        outline: {
            initial: "bg-background text-brand border border-brand",
            hover: "hover:bg-brandLight hover:text-brand",
            focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
            active: "active:scale-[.95]"
        },
        link: {
            initial: "text-brand",
            hover: "hover:text-brandVariant",
            focusVisible: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2",
            active: "active:scale-[.95]"
        }
    },
  }