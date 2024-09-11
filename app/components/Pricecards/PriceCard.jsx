import { formatText } from "../../utils/formatText"
import Button from "../Button"

const PriceCard = (props) => {
  const { title, text, time, price, link } = props
  return (
    <div className="bg-white shadow p-10 rounded-md flex justify-between w-full">
      <div className="w-4/6">
        <h2 className="text-ss-h2 text-ss-bordeaux mb-5">{title}</h2>
        <p className="text-ss-p-reg">{formatText(text)}</p>
      </div>
      <div className="w-2/6 ml-8">
        <div className="flex flex-col justify-between items-end h-full">
          <div className="flex justify-between h-auto mb-8">
            <p className="text-ss-p-smbold text-right mr-6">{formatText(time)}</p>
            <p className="text-ss-p-smbold border-l border-ss-peach pl-6">{formatText(price)}</p>
          </div>
          <Button btnLink={link} btnText="Buchen"/>
        </div>
      </div>
    </div>
  )
}
export default PriceCard