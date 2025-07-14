import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from "clsx";

const DATA_PREFIX = "felicity::";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function saveItem<T>(key: string, value: T): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
  }
}

export function getItem<T>(key: string): T | null | undefined {
  if (typeof window !== "undefined") {
    const got = localStorage.getItem(`${DATA_PREFIX}${key}`);
    return got ? (JSON.parse(got) as T) : null;
  }
}

export function removeItem(key: string): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(`${DATA_PREFIX}${key}`);
  }
}
export const getActualPrice = (price: string | number, discountRate: string | number) => {
  const priceNumber = Number(price);
  const discountRateNumber = Number(discountRate);
  if (isNaN(priceNumber) || isNaN(discountRateNumber)) {
    return price;
  }
  const discountAmount = (priceNumber * discountRateNumber) / 100;
  const actualPrice = priceNumber - discountAmount;
  return actualPrice;
}

export function capitalizeFirstLetter(word: string) {
  if (word.length === 0) {
    return word; // Return the original string if it's empty
  }
  const firstChar = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return firstChar
}
export function capitalizeFirstLetterOfEachWord(sentence: string) {
  return sentence
    ?.split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}