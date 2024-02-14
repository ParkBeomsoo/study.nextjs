import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl';

export function getMessage(namespace: string): any {

  const isServerComponent: () => (boolean) = () => {
    return typeof window === 'undefined' ? true : false;
  };

  if (isServerComponent()) {
    let localeTranslations = {}
    try {
      localeTranslations = getTranslations(namespace);
    } catch(error) {
      localeTranslations = useTranslations(namespace);
    }
    return localeTranslations;
  } else {
    return useTranslations(namespace);
  }
}





