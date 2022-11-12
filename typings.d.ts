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

export interface AdData {
  id: number;
  title: string;
  desc: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  industry?: string;
  brand: string;
  image?: string;
  image_width: string;
  image_height: string;
}
export interface Adverts {
  data: AdData[];
}

export interface Response {
  data: AdData;
  meta?: object;
}

export interface PageData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StatisticsResults {
  stats: {
    id: number;
    stat: string;
    title: string;
    desc: string;
  };
}

export interface ClientResults {
  id: number;
  client: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
}

export interface ServicesResults {
  data: object;

  // {
  //   id: number;
  //   attributes: {
  //     slug: string;
  //     title: string;
  //     icon: string;
  //     desc: string;
  //   };
  // };
}
