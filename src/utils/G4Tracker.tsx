"use client";

import { useEffect } from "react";

interface GA4TrackerProps {
    product: {
        id: string;
        product_name: string;
        category_name: string;
        price: number;
    };
}

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      targetId: string,
      parameters?: {
        [key: string]: any;
        items?: Array<{
          item_id: string;
          item_name: string;
          item_category: string;
          price: number;
        }>;
      }
    ) => void;
  }
}

export default function GA4Tracker({ product }: GA4TrackerProps) {
    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "view_item", {
                items: [
                    {
                        item_id: product.id,
                        item_name: product.product_name,
                        item_category: product.category_name,
                        price: product.price,
                    },
                ],
            });
        }
    }, [product]);

    return null;
}


