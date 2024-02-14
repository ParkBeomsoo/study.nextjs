import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'

export const locales = ['ko', 'en'] as const
export const localePrefix = 'never' // Default

export const pathnames = {} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
