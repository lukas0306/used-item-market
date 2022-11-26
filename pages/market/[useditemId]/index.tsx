import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketComment from "../../../src/components/units/marketComment/write/MarketComment.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const ProductDetailUI = () => {
  return (
    <>
      <MarketDetail />
      {/* <MarketComment /> */}
    </>
  );
};

export default withAuth(ProductDetailUI);
