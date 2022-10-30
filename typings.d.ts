interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: object;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}

export interface Adverts {
  id: number;
  title: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  brand: string;
  image?: Image;
}


export interface Response {
  data: Adverts[];
  meta?: object;
}
