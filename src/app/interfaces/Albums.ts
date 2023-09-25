// Generated by https://quicktype.io

export interface Albums {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

interface Item {
    album_group:            string;
    album_type:             string;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    total_tracks:           number;
    type:                   string;
    uri:                    string;
}

interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

interface ExternalUrls {
    spotify: string;
}

interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}