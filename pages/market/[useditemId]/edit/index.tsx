import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import ProductRegister from "../../../../src/components/units/market/register/productregister.container";

export default function EditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  return <ProductRegister isEdit={true} data={data} />;
}
