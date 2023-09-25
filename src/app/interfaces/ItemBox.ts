interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}

export interface ItemBox {
    name: string;
    images?: Image[];
    subtitle?: string;
}