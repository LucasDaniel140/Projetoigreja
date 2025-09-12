
import fs from 'fs';
import path from 'path';

interface SiteData {
  logo: string;
  favicon: string;
}

const defaultData: SiteData = {
    logo: 'https://i.imgur.com/OxjotEv.png',
    favicon: '',
};

const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'site-data.json');

function readData(): SiteData {
  try {
    if (fs.existsSync(dataFilePath)) {
      const json = fs.readFileSync(dataFilePath, 'utf-8');
      const data = JSON.parse(json);
      return { ...defaultData, ...data };
    }
  } catch (error) {
    console.error('Error reading site data, falling back to defaults:', error);
  }
  return defaultData;
}

function writeData(data: SiteData) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing site data:', error);
  }
}

class SiteDataStore {
  private data: SiteData;
  private static instance: SiteDataStore;

  private constructor() {
    this.data = readData();
  }

  public static getInstance(): SiteDataStore {
    if (!SiteDataStore.instance) {
      SiteDataStore.instance = new SiteDataStore();
    }
    return SiteDataStore.instance;
  }

  public get(): SiteData {
    // Re-read data in development to catch manual changes
    if (process.env.NODE_ENV === 'development') {
        return readData();
    }
    return this.data;
  }

  public set(newData: Partial<SiteData>) {
    const currentData = readData();
    const updatedData = { ...currentData, ...newData };
    writeData(updatedData);
    this.data = updatedData;
  }
}

export const siteDataStore = SiteDataStore.getInstance();
