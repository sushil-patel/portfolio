import { siteConfig } from '../config/site';

/**
 * Returns a fully qualified absolute URL using the configured site URL and base path.
 * Automatically handles base path, trailing and leading slashes.
 */
export function getAbsoluteUrl(path: string = '/'): string {
  const domain = siteConfig.siteUrl.replace(/\/+$/, '');
  const relative = getRelativePath(path);
  const cleanRelative = relative.replace(/^\/+/, '');
  return cleanRelative ? `${domain}/${cleanRelative}` : domain;
}

/**
 * Returns an internal path prefixed with the configured base path.
 * Handles subpath deployments (e.g. GitHub Pages /portfolio/) and prevents duplicate prefixing.
 */
export function getRelativePath(path: string = '/'): string {
  const base = siteConfig.basePath === '/' ? '' : siteConfig.basePath.replace(/\/+$/, '');

  if (!base) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  // If path already starts with the base path, return as is
  if (path === base || path.startsWith(`${base}/`)) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return `${base}/`;
  }
  return `${base}${cleanPath}`;
}
