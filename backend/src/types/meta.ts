export interface ClientMeta {
    title: string | null;
    description: string | null;
    url: string | null;
}

export interface Meta extends ClientMeta {
    id: number;
}
