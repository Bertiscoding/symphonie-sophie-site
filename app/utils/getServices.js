export const getServices = (param) => {
  return Array.from({ length: param.pricecard_count }, (_, i) => {
    const index = i + 1;
    const trimmedVal = param[`pricecard_title_${index}`].replace(/\s/g, "");
    
    return {
      text: param[`pricecard_title_${index}`],
      value: trimmedVal
    };
  });
}
