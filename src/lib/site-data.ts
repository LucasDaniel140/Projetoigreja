
// This file must only be used on the server.
import fs from 'node:fs/promises';
import path from 'path';

export interface SiteData {
  logo: string;
  favicon: string;
}

const defaultData: SiteData = {
    logo: 'https://i.imgur.com/OxjotEv.png',
    favicon: '',
};

const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'site-data.json');

async function readData(): Promise<SiteData> {
  try {
    await fs.access(dataFilePath);
    const json = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(json);
    return { ...defaultData, ...data };
  } catch (error) {
    // File doesn't exist or other error, return default
    return defaultData;
  }
}

async function writeData(data: SiteData): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing site data:', error);
  }
}

class SiteDataStore {
  private static instance: SiteDataStore;

  private constructor() {}

  public static getInstance(): SiteDataStore {
    if (!SiteDataStore.instance) {
      SiteDataStore.instance = new SiteDataStore();
    }
    return SiteDataStore.instance;
  }

  public async get(): Promise<SiteData> {
    return await readData();
  }

  public async set(newData: Partial<SiteData>): Promise<void> {
    const currentData = await readData();
    const updatedData = { ...currentData, ...newData };
    await writeData(updatedData);
  }
}

export const siteDataStore = SiteDataStore.getInstance();
