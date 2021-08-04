import React from "react"

interface IVideoProps {
  link: string
}

const Video: React.FC<IVideoProps> = ({ link }) => {
  return (
    <video preload='none' muted playsInline autoPlay loop className="hero-vid">
      <source src={link} />
    </video>
  )
}

export default Video
