export interface Voice {
  name: string;
  position: string;
  photoURL: string;
  comment: string;
}

export interface Menu {
  label: string;
  url: string;
}


export interface Feature {
  imageURL: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionURL?: string;
}

export interface Service {
  imageURL: string;
  title: string;
  description: string;
}

export interface Media {
  name: string;
  logoURL: string;
  website?: string;
}

export interface Conversion {
  label: string;
  url: string;
  lead: string;
}

export interface Price {
  title: string;
  price: number;
  unit: string;
  description: string;
}

export interface Contributor {
  name: string;
  photoURL: string;
}

export interface Concept {
  title: string;
  description: string;
  clipURL?: string;
}

export interface Menu {
  label: string;
  url: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Hero {
  mainText: string;
  subText?: string;
  actionLabel?: string;
  actionURL?: string;
  coverURL?: string;
}

export interface Organization {
  name: string;
  address: {
    zipCode: string;
    street: string;
    tel: string;
    email: string;
    sns: {
      gitHub: string;
      twitter: string;
      facebook: string;
    }
  };
}

export interface Account {
  gitHub?: string;
  twitter?: string;
  facebook?: string;
}

export interface Lp {
  title: string;
  owner: string;
  account?: Account;
  menues?: Menu[];
  contents: {
    hero: Hero;
    concept?: Concept;
    medias?: Media[];
    voices?: Voice[];
    features?: Feature[];
    services?: Service[];
    organization?: Organization;
    conversion?: Conversion;
    pricing?: Price[];
    contributor?: Contributor[];
    faqs: Faq[];
    customSection?: string;
  };
}
