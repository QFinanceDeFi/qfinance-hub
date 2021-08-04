import React from "react"

interface IFeatureProps {
  title: string
  icon: any
  children: any
}

const Feature: React.FC<IFeatureProps> = ({ title, icon, children }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-content">{children}</div>
    </div>
  )
}

export default Feature
