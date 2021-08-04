import React from "react"

interface IStepItemProps {
  step: number | string
  header: string
  children: any
}

const StepItem: React.FC<IStepItemProps> = ({ step, header, children }) => {
  return (
    <div className="step-item">
      <div className="step-number">{`${step}`}</div>
      <div className="step-details">
        <h3>{header}</h3>
        <div className="step-content">{children}</div>
      </div>
    </div>
  )
}

export default StepItem
