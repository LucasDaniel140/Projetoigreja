
'use server'

import { videoStore } from '@/lib/video-data';

export async function saveVideoUrls(urls: string[]) {
  console.log("Saving URLs:", urls);
  videoStore.setUrls(urls);
  return { success: true };
}

export async function getVideoUrls(): Promise<string[]> {
   console.log("Getting URLs:", videoStore.getUrls());
  return videoStore.getUrls();
}
