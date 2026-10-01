export interface CatalogItem {
  sku: string;
  title: string;
  price: number;
  visible: boolean;
}

const catalog: CatalogItem[] = [];

export function addCatalogItem(title: string, price: number): CatalogItem {
  const item = { sku: `sku-${catalog.length + 1}`, title, price, visible: true };
  catalog.push(item);
  console.log("catalog item added", item.sku);
  return item;
}

export function visibleCatalog(): CatalogItem[] {
  return catalog.filter((item) => item.visible);
}
