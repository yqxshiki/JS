function lazyload() {
  let timeOut = null;
  var bottle = function () {
    const imgs = document.getElementsByTagName("img");
    const len = imgs.length;
    // 视口的高度
    const viewHeight = document.documentElement.clientHeight;
    // 滚动条高度
    const scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
      const offsetHeight = imgs[i].offsetTop;
      if (offsetHeight < viewHeight + scrollHeight) {
        const src = imgs[i].dataset.src;
        imgs[i].src = src;
      }
    }
  };
  debounce(bottle, 3000);
}
function debounce(fn, wait) {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    fn.apply(this, arguments);
  }, wait);
}

window.addEventListener("scroll", lazyload);
