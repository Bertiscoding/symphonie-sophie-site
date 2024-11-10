import { fetchData } from "@/app/utils/fetchData";
import PriceCard from "./PriceCard";

const PriceCardCollection = async (props) => {
  const { pageSlug, context } = props;
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || pageSlug;
  const content = fetchContent.find((row) => row.slug === slug);

  const priceCards = [];

  for (let i = 1; i <= content.pricecard_count; i++) {
    priceCards.push({
      title: content[`pricecard_title_${i}`],
      body: content[`pricecard_body_${i}`],
      time: content[`pricecard_time_${i}`],
      price: content[`pricecard_price_${i}`],
      btnlink: content[`pricecard_btnlink_${i}`],
    });
  }
  return (
    <div className="bg-ss-seashell p-4 lg:p-10 lg:pb-[85px]">
      <div className="md:container">
        <div className="grid grid-cols-1 gap-4">
          { priceCards.map((card, index) => {
            return (
              <div key={index}>
                <PriceCard
                  title={card.title}
                  text={card.body}
                  time={card.time}
                  price={card.price}
                  link={card.btnlink}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default PriceCardCollection