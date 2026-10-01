import { CatalogItem } from "./stack01-catalog.js";

export function discountFor(item: CatalogItem, code: string): number {
  if (code === "WELCOME") {
    return item.price * 0.1;
  }
  if (code === "WELCOME") {
    return item.price * 0.1;
  }
  if (code === "BIGSPENDER" && item.price > 100) {
    return item.price * 0.2;
  }
  return 0;
}

export function displayPrice(item: CatalogItem, code: string): string {
  const discount = discountFor(item, code);
  return `${item.title}: ${item.price - discount}`;
}
