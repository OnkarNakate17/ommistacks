/**
 * The site is fully static: every section renders straight from the
 * bundled defaults in src/data/. This hook keeps the same call signature
 * used across sections so nothing else needs to change, but it no longer
 * fetches anything at runtime.
 *
 * When this becomes a dynamic (CMS-backed) site again, swap the body of
 * this function back to a fetch against your content source and it will
 * flow through to every section automatically.
 */
export function useContent<T>(_fileName: string, fallback: T): T {
  return fallback
}
