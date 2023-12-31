// Generated by https://quicktype.io

export interface Playlist {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    followers:     Followers;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: string;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          string;
    uri:           string;
}

interface ExternalUrls {
    spotify: string;
}

interface Followers {
    href:  null;
    total: number;
}

interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}

interface Owner {
    display_name?: string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          string;
    uri:           string;
    name?:         string;
}

interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

interface Item {
    added_at:        string;
    added_by:        Owner;
    is_local:        boolean;
    primary_color:   null;
    track:           Track;
    video_thumbnail: VideoThumbnail;
}

interface Track {
    album:             Album;
    artists:           Owner[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    episode:           boolean;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track:             boolean;
    track_number:      number;
    type:              string;
    uri:               string;
}

interface Album {
    album_type:             string;
    artists:                Owner[];
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

interface ExternalIDS {
    isrc: string;
}

interface VideoThumbnail {
    url: null;
}
