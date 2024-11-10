import Button from "../Button";
import BackgroundImage from "../BackgroundImages/BackgroundImage";
import { formatText } from "../../utils/formatText";

const ProductCard = (props) => {
  const { bgImgUrl, title, text, link } = props

  return (
    <div className="relative">
      <div className="h-[120px] w-[250px]">
        <BackgroundImage bgImgUrl={bgImgUrl} bgClassNames="rounded-lg absolute top-[45px] left-[48px] h-full"/>
      </div>
      <div className="h-[340px] w-[346px] bg-white pt-16 rounded shadow-md flex flex-col items-center">
        <h2 className="text-ss-h2 text-ss-bordeaux text-center">{title}</h2>
        <p className="text-ss-p-reg p-5">{formatText(text)}</p>
        <Button btnLink={link} btnText="Mehr Information"  />
      </div>
    </div>
  )
}
export default ProductCard
