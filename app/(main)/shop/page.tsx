import ShopPageOne from "@/components/pages/shop-pages/ShopPageOne";
import { SearchParams } from "@/types";

function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  return (
    <div>
      <ShopPageOne searchParams={searchParams} />
      {/* <ShopPageTwo searchParams={searchParams}/> */}
    </div>
  );
}

export default ShopPage;
