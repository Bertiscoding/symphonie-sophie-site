"use client"
import BackgroundImage from "./BackgroundImage"
import Button from "./Button"

const HighlightSection = (props) => {
  const { title, text, img, btnLink } = props
  
  return (
    <div className="bg-ss-peach p-10">
      <div className="md:container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-80">
          <div className="flex flex-col justify-around">
            {title && ( <h3 className="text-ss-h3">{title}</h3> )}
            <p className="text-ss-p-reg">{text}</p>
            {btnLink && ( <Button btnLink={btnLink} btnText="Mehr erfahren" /> )}
          </div>
          <div>
          <BackgroundImage bgImgUrl={img} bgClassNames="rounded"/>
          </div>
        </div>
      </div>

    </div>
  )
}
export default HighlightSection