// Two small additions to Markdown, used in all files under src/content/:
//
// 1. ==text== is shown with a yellow highlight. We use it for anything still
//    missing or to be decided, e.g. ==[Link prüfen]==.
// 2. Links that start with / (e.g. [Datenschutz](/datenschutz/)) get the site's
//    base path, so they keep working when the site lives in a subfolder.

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function remarkSite({ base = '' } = {}) {
  const prefix = base.replace(/\/$/, '');

  const walk = (node) => {
    if (node.type === 'link' && node.url.startsWith('/') && !node.url.startsWith('//')) {
      node.url = prefix + node.url;
    }
    if (!node.children) return;
    const out = [];
    for (const child of node.children) {
      if (child.type === 'text' && child.value.includes('==')) {
        child.value.split(/==([\s\S]+?)==/g).forEach((part, i) => {
          if (!part) return;
          out.push(i % 2 ? { type: 'html', value: `<mark>${escape(part)}</mark>` } : { type: 'text', value: part });
        });
      } else {
        walk(child);
        out.push(child);
      }
    }
    node.children = out;
  };

  return (tree) => walk(tree);
}
