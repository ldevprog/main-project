type Mods = Record<string, boolean | string>;

export function classNames(
    cls = "",
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, condition]) => Boolean(condition))
            .map(([className]) => className),
    ].join(" ");
}
