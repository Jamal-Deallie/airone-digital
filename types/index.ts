export interface Advertisements {
  slug: string;
  title: string;
  desc: string;
  image: string;
}
export interface StatisticsResults {
  stats: {
    id: number;
    stat: string;
    title: string;
    desc: string;
  };
}

// id: number;
// attributes: {
//   title: string;
//   desc: string;
//   stat: string;
// };

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

export interface ClientResults {
  id: number;
  client: string;
  icon: boolean;
  logo?: object;
}

export interface AdsResults {}
