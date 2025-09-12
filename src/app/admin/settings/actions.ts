
'use server'

import { siteDataStore } from '@/lib/site-data';

export async function saveSiteIdentity({ logo, favicon }: { logo?: string; favicon?: string }) {
  if (logo) {
    siteDataStore.setLogo(logo);
  }
  if (favicon) {
    siteDataStore.setFavicon(favicon);
  }
  return { success: true };
}

export async function getSiteIdentity(): Promise<{ logo: string; favicon: string }> {
  return {
    logo: siteDataStore.getLogo(),
    favicon: siteDataStore.getFavicon(),
  };
}
