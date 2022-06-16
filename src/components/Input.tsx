import clsx from 'clsx'
import React, { useState } from 'react'

interface optionType {
  label: string
  value: string
}
interface InputProps {
  className?: string
  title?: string
  onInputChange?: (value: any) => void
  options?: optionType[] | Array<string>
  defaultValue?: string
  [x: string]: any
}

export const Input: React.FC<InputProps> = ({
  className,
  title,
  onInputChange,
  ...props
}) => {
  return (
    <>
      <p className="font-normal text-l">{title}</p>
      <input
        {...props}
        className={clsx(className, `w-full input mt-2 mb-4`)}
        onChange={(e) => {
          if (onInputChange) {
            onInputChange(e.target.value)
          }
        }}
      />
    </>
  )
}

export const Radio: React.FC<InputProps> = ({
  className,
  title,
  options,
  onInputChange,
  defaultValue,
  ...props
}) => {
  const [currentRadioValue, setCurrentRadioValue] = useState(defaultValue)
  return (
    <>
      <p className="font-normal">{title}</p>
      {options!.map((item) => {
        return (
          <div
            className="flex items-center my-2"
            key={(item as optionType).label}
          >
            <input
              {...props}
              type="radio"
              name="radio"
              value={(item as optionType).value}
              checked={(item as optionType).value === currentRadioValue}
              onChange={(e) => {
                if (onInputChange) {
                  onInputChange(e.target.defaultValue)
                }
                setCurrentRadioValue(e.target.defaultValue)
              }}
            />
            <label
              className="font-light text-sm pl-2"
              htmlFor={(item as optionType).label}
            >
              {(item as optionType).label}
            </label>
          </div>
        )
      })}
    </>
  )
}

export const CheckBox: React.FC<InputProps> = ({
  className,
  title,
  options,
  onInputChange,
  ...props
}) => {
  return (
    <>
      <p className="font-light">{title}</p>
      {options!.map((item, index) => {
        return (
          <div className="flex items-center my-3" key={index}>
            <input
              {...props}
              type="checkbox"
              onChange={(e) => {
                if (onInputChange) {
                  onInputChange(e.target.checked)
                }
              }}
            />
            <label className="font-light text-sm pl-2" htmlFor={item as string}>
              {item as string}
            </label>
          </div>
        )
      })}
    </>
  )
}
