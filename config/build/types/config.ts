export type mode = "development" | "production";

export interface Paths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: mode;
    paths: Paths;
    isDev: boolean;
}
