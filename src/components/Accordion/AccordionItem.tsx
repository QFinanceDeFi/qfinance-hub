import React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IAccordionItemProps {
  isOpen: number
  setOpen: Function
  header: string
  index: number
  children: any
}

const AccordionItem: React.FC<IAccordionItemProps> = ({
  isOpen,
  setOpen,
  header,
  index,
  children,
}) => {
  return (
    <div style={{ marginBottom: "14px" }}>
      <motion.div
        initial={false}
        className="accordion-item"
        style={{
          color: isOpen === index ? "black" : "white",
          fontWeight: isOpen === index ? 700 : 600
        }}
        animate={{
          backgroundColor: isOpen === index ? "#BA9860" : "rgb(0,0,0)",
        }}
        onClick={() => setOpen(isOpen === index ? 0 : index)}
      >
        <h3>{header}</h3>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen === index && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="accordion-content"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div>{children}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem
