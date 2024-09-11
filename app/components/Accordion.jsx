"use client"

import { useState } from "react"
import { formatText } from "../utils/formatText"

const Accordion = (props) => {
  const { index, title, body} = props
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  };

  return (
    <div className="w-full mb-6">

      <div
        onClick={() => toggleAccordion(index)}
        className="bg-ss-champagne rounded-tl-lg rounded-tr-lg drop-shadow-md cursor-pointer flex justify-between items-center px-10"
      >
        <h2 className="text-ss-h2 text-ss-bordeaux my-2">{title}</h2>
        <span className="text-ss-bordeaux">
          {(openIndex === index) ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>        
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </span>
      </div>

      <div className={`px-10 pt-6 bg-ss-eggschell overflow-hidden transition-max-height duration-500 ease-in-out
        ${ openIndex === index ? 'max-h-screen' : 'max-h-10' }`}
      >
        <div className="pb-6">
          <p className="text-ss-p-reg">{formatText(body)}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
