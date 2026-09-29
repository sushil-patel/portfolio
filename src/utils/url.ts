import { siteConfig } from '../config/site';

/**
 * Returns a fully qualified absolute URL using the configured site URL.
 * Automatically handles trailing and leading slashes.
 */
export function getAbsoluteUrl(path: string = '/'): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}/${cleanPath}` : base;
}

/**
 * Returns an internal path prefixed with the configured base path.
 * Useful for GitHub Pages subdirectory deployments if ever configured with a subpath.
 */
export function getRelativePath(path: string = '/'): string {
  const basePath = siteConfig.basePath === '/' ? '' : siteConfig.basePath.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}` || '/';
}
