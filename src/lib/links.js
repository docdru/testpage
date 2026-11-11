// Turn '/privacy/' into '/testpage/privacy/' when the site has a `base` path.
// Full URLs, mailto: links and #anchors are left alone.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const link = (href) => (href.startsWith('/') ? `${base}${href}` : href);
export const isExternal = (href) => /^https?:\/\//.test(href);
