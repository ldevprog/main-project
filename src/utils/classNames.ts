type Mods = Record<string, boolean | string>;

export function classNames(
    baseClass: string = "",
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        baseClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, condition]) => Boolean(condition))
            .map(([className]) => className),
    ].join(" ");
}
