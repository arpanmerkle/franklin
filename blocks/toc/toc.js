export default function decorate(block) {
  block.firstElementChild.classList.add('toc-title');
  const cols = [...block.lastElementChild.children];
  cols.forEach((col, i) => {
    col.classList.add('toc-item', `toc-${i + 1}`);
    console.log(i);
    col.querySelectorAll('a').forEach((a) => {
      if (a.getAttribute('href').charAt(0) === '#') {
        a.classList.add('hash-link');
      }
    });
  });
  block.classList.add(`toc-${cols.length}-cols`);
}
