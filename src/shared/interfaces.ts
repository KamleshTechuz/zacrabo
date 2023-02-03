export interface CLG {
    name: string;
    year: string;
    field: string;
    degree: string;
    status: string;
    image: any;
  }

  export interface SCH {
    name: string;
    year: string;
    field: string;
    degree: string;
    status: string;
    image: any;
  }


//   Home interfaces

export interface SocialData {
    class: string;
    label: string;
    url: string;
    icon: string;
}

// Projects interfaces

export interface Project {
    name: string;
    desc: string;
    image: any;
    res_img: any;
    category: Array<number>;
    links: {
      view: string;
      code: string;
    }
}

export interface Categories {
    id: number;
    checked: boolean;
    name: string;
}

// Experience interfaces

export interface ExpsList {
    company_name: string;
    join_from: string;
    role: string;
    till: string;
}


//   Contact page interfaces

export interface InitFormData {
    name: string;
    email: string;
    num: string;
    msg: string;
}

export type FormErrorKey = {
    [key: string]: string | null;
 }

export interface ContHandChange {
    target: {
        name: string;
        value: string;
    }
}

// footer interfaces

export interface QckLink {
    to: string;
    name: string;
}

// Navbar interfaces

export interface NavData {
    id: number;
    url: string;
    name: string;
}