import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "ja", "zh", "ko"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "ja",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
