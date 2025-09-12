
class SiteDataStore {
  private logo: string = "https://i.imgur.com/OxjotEv.png";
  private favicon: string = "/favicon.ico"; // Default fallback

  getLogo(): string {
    return this.logo;
  }

  setLogo(newLogo: string) {
    this.logo = newLogo;
  }

  getFavicon(): string {
    return this.favicon;
  }

  setFavicon(newFavicon: string) {
    this.favicon = newFavicon;
  }
}

export const siteDataStore = new SiteDataStore();
