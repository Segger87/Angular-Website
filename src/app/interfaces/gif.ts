export interface IGif {
    data: Datum[];
}

export interface Datum {
    id: string;
    source: string;
    images: Images;
    title: string;
}

export interface Images {
    downsized: Downsized;
}

export interface Downsized {
    url: string;
    width: string;
    height: string;
    size: string;
}
