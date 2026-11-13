// Turn '/datenschutz/' into '/testpage/datenschutz/' when the site has a `base` path.
// Full URLs, mailto: links and #anchors are left alone.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const link = (href) => (href.startsWith('/') ? `${base}${href}` : href);
export const isExternal = (href) => /^https?:\/\//.test(href);

// Home-page anchors ('/#warum') point to the English home page on English pages.
export const localLink = (href, lang) =>
  link(lang === 'en' && href.startsWith('/#') ? `/en${href}` : href);

// For short texts from the header fields (captions, notices): escape HTML and
// turn ==text== into a yellow highlight, like in the Markdown files.
export const marked = (text = '') =>
  text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/==([\s\S]+?)==/g, '<mark>$1</mark>');
