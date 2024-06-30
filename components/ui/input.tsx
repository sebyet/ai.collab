import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    onClearClick?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onClearClick, startIcon, endIcon,
     ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const inputType = type === "password" ? passwordVisible ? "text" : "password" : type;
    const clearInput = () => {
      if (onClearClick) {
        onClearClick();
      }
    };
    return (
      <div className="relative">
        {startIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{startIcon}</div>}
        {endIcon && <div className="absolute right-3 top-1/2 -translate-y-1/2">{endIcon}</div>}
        <input
          type={inputType}
          className={cn(
            "flex h-14 w-full rounded-full border border-input bg-background px-12 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-black focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}  
        />
        {type === 'password' && props.value != '' &&
          <button onClick={() => setPasswordVisible(!passwordVisible)} type="button" className="absolute right-12 top-1/2 -translate-y-1/2">
            {!passwordVisible &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            {passwordVisible &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            }
          </button>
        }   
        {onClearClick  && props.value != '' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={clearInput}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
