import { Menu } from "@/validations/menu-validations";
import { useMemo } from "react";

export function usePricing(
  ordermenu: { menus: Menu; quantity: number }[] | null | undefined
) {
  const totalPrice = useMemo(() => {
    let total = 0;
    ordermenu?.forEach((item) => {
      total += item.menus.price * item.quantity;
    });
    return total;
  }, [ordermenu]);

  const tax = useMemo(() => {
    return Math.round(totalPrice * 0.12);
  }, [totalPrice]);

  const service = useMemo(() => {
    return Math.round(totalPrice * 0.05);
  }, [totalPrice]);

  const grandTotal = useMemo(() => {
    return totalPrice + tax + service;
  }, [totalPrice, tax, service]);

  return {
    totalPrice,
    tax,
    service,
    grandTotal,
  };
}
