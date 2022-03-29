import clsx from 'clsx'
import React, { useState } from 'react'

export const Input = ({ className, title, options, onChange, ...props }) => {
  return (
    <>
      <p className="font-normal text-l">{title}</p>
      <input
        {...props}
        className={clsx(className, `w-full input mt-2 mb-4`)}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </>
  )
}

export const Radio = ({
  className,
  title,
  options,
  onChange,
  defaultValue,
  ...props
}) => {
  const [currentRadioValue, setCurrentRadioValue] = useState(defaultValue)
  return (
    <>
      <p className="font-normal">{title}</p>
      {options.map((item) => {
        return (
          <div className="flex items-center my-2" key={item.label}>
            <input
              {...props}
              type="radio"
              name="radio"
              value={item.value}
              checked={item.value === currentRadioValue}
              onChange={(e) => {
                onChange(e.target.defaultValue)
                setCurrentRadioValue(e.target.defaultValue)
              }}
            />
            <label className="font-light text-sm pl-2" htmlFor={item.label}>
              {item.label}
            </label>
          </div>
        )
      })}
    </>
  )
}

export const CheckBox = ({ className, title, options, onChange, ...props }) => {
  return (
    <>
      <p className="font-light">{title}</p>
      {options.map((item) => {
        return (
          <div className="flex items-center my-3" key={item}>
            <input
              {...props}
              type="checkbox"
              onChange={(e) => onChange(e.target.checked)}
            />
            <label className="font-light text-sm pl-2" htmlFor={item}>
              {item}
            </label>
          </div>
        )
      })}
    </>
  )
}
