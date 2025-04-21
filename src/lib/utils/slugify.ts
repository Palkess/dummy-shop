/**
 * Takes a string and converts it to a URL-friendly slug.
 * @param text - The text to slugify
 * @returns The slugified string
 * @example
 * Essence Mascara Lash Princess
 * // => essence-mascara-lash-princess
 */
export const slugify = (text: string) => {
    return text
        .toLowerCase()
        .trim()
        .normalize('NFD') // split accented letters into base letter + diacritics
        .replace(/[\u0300-\u036f]/g, '') // remove diacritics
        .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric characters (excluding space and hyphen)
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // collapse multiple hyphens
};
