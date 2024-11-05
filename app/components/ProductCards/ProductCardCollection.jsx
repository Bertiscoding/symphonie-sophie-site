import { fetchData } from "@/app/utils/fetchData";
import ProductCard from "./ProductCard";

const ProductCardCollection = async (props) => {
  const { pageSlug, context } = props;
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || pageSlug;
  const content = fetchContent.find((row) => row.slug === slug);

  const productCards = [];

  for (let i = 1; i <= content.productcard_count; i++) {
    productCards.push({
      title: content[`productcard_title_${i}`],
      body: content[`productcard_body_${i}`],
      btnlink: content[`productcard_btnlink_${i}`],
      img: content[`productcard_img_${i}`],
    });
  }

  return (
    <div className="bg-ss-seashell p-4 lg:p-10 lg:pb-[85px]">
      <div className="md:container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          { productCards.map((card, index) => {
            return (
              <div key={index}>
                <ProductCard
                  bgImgUrl={card.img}
                  title={card.title}
                  text={card.body}
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

export default ProductCardCollection
