import { cn } from '@/utils/class-name'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

type Option<T> = {
  value: T
  label: string
}

interface SelectProps<T extends string | number>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'defaultValue'> {
  label: string
  options: Option<T>[]
  value?: T
  defaultValue?: T
  onValueChange?: (selectedOption: T | undefined) => void
  containerClassName?: string
  labelClassName?: string
}

const Select = <T extends string | number>({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  className,
  containerClassName,
  labelClassName,
  ...props
}: SelectProps<T>) => {
  const generatedId = useId()
  const id = props.id || `select-${generatedId}`

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsOpen(false)
    onValueChange?.(event.target.value as T | undefined)
  }

  const internalValue = value !== undefined ? value : defaultValue

  return (
    <div className={cn('flex w-full items-center gap-4', containerClassName)}>
      <label htmlFor={id} className={cn('text-secondary-700 font-medium whitespace-nowrap', labelClassName)}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={internalValue !== undefined ? String(internalValue) : ''}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className={cn(
            'focus:border-primary-500 focus:ring-primary-500 border-secondary-300 disabled:bg-secondary-100 w-full appearance-none rounded-full border bg-white px-5 py-2 pr-8 text-base focus:ring-2 focus:outline-none disabled:cursor-not-allowed',
            className,
          )}
          {...props}>
          <option value="" disabled hidden>
            Select...
          </option>
          {options.map(option => (
            <option key={String(option.value)} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="text-secondary-700 pointer-events-none absolute inset-y-0 right-3 flex items-center px-2">
          <ChevronDown
            className={cn('size-5 transition-transform duration-200', {
              'rotate-180': isOpen,
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default Select
export type { Option }
