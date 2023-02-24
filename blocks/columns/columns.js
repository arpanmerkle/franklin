export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  window.addEventListener('scroll', function() {
    var element = document.querySelectorAll('div.facts > div > div > p ');
    element.forEach((ele, i) => {
      var position = ele.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        ele.style.setProperty("--num",100);
        console.log(ele.innerHTML);
      }
      if (position.top < window.innerHeight && position.bottom >= 0) {
        ele.style.setProperty("--num",100);
        console.log(ele.innerHTML);
      }
    });
  });
}
