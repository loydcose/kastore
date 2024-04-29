import ShopBanner from "../shop-banner";
import ShopCategories from "../shop-categories/shop-categories";
import ShopItems from "../shop-items/shop-items";
import ShopSearch from "../shop-search";

export default function page() {
  return (
    <>
      <ShopBanner classname="mb-16" />
      <ShopSearch classname="mb-12" />
      <ShopCategories className="mb-4" />
      <ShopItems />
    </>
  );
}
