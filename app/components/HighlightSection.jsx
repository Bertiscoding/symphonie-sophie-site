"use client"
import { formatText } from "../utils/formatText"
import BackgroundImage from "./BackgroundImages/BackgroundImage"
import Button from "./Button"

const HighlightSection = (props) => {
  const { title, text, img, btnLink } = props
  
  return (
    <div className="bg-ss-peach p-4 lg:p-10">
      <div className="md:container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 min-h-80 h-fit">
          <div className="flex flex-col justify-around">
            <div>
              {title && ( <h3 className="text-ss-h3 mb-4 text-ss-bordeaux">{title}</h3> )}
              <p className="text-ss-p-reg">{formatText(text)}</p>
            </div>
            {btnLink && ( <Button btnLink={btnLink} btnText="Mehr erfahren" /> )}
          </div>
          <div>
            <BackgroundImage bgImgUrl={img} bgClassNames="rounded h-[270px] lg:h-full"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HighlightSection
