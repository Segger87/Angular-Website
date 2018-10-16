export interface IGif {
    data: Datum[];
}

export interface Datum {
    type: string;
    id: string;
    slug: string;
    url: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    title: string;
    _score: number;
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
