
// This is a simple in-memory store for video URLs.
// In a real application, you would replace this with a database.

class VideoStore {
  private urls: string[] = [
    '<iframe class="w-full h-full" src="https://www.youtube.com/embed/vGohlJdcGvE?si=SOirILXR5lEz-LLv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe class="w-full h-full" src="https://www.youtube.com/embed/WwaS9A4c0YM?si=8jRVGh4rG0Cprg3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe class="w-full h-full" src="https://www.youtube.com/embed/_a2gUBNM0dE?si=SsU_bSkgAk94UTLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe class="w-full h-full" src="https://www.youtube.com/embed/2tSS_lGQCQ0?si=efV3Mo5lqPCA7MkB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  ];

  private backgroundVideoUrl: string = "https://i.imgur.com/o6GrCN0.mp4";

  getUrls(): string[] {
    return this.urls;
  }

  setUrls(newUrls: string[]) {
    if (Array.isArray(newUrls) && newUrls.length === 4) {
      this.urls = newUrls;
    }
  }

  getBackgroundVideoUrl(): string {
    return this.backgroundVideoUrl;
  }

  setBackgroundVideoUrl(newUrl: string) {
    this.backgroundVideoUrl = newUrl;
  }
}

// Export a singleton instance
export const videoStore = new VideoStore();
