export interface Voice {
  name: string;
  position: string;
  photoURL: string;
  comment: string;
}

export interface Feature {
  imageURL: string;
  title: string;
  description: string;
}

export interface Service {
  imageURL: string;
  title: string;
  description: string;
}

export interface Media {
  name: string;
  logoURL: string;
}

export interface Conversion {
  label: string;
  url: string;
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
  text: string;
}

export interface Menu {
  label: string;
  url: string;
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

export interface Lp {
  title: string;
  description: string;
  menues: Menu[];
  contents: {
    hero: {
      mainText: string;
      subText: string;
      actionLabel: string;
      actionURL: string;
    };
    concept: Concept;
    media: Media[];
    voices: Voice[];
    features: Feature[];
    services: Service[];
    organization: Organization;
    conversion: Conversion;
    pricing: Price[];
    contributor: Contributor[];
  };
}
