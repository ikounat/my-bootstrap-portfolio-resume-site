var scrollSpy = NaN;

function init(){
  scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#main-sidenav',
    smoothScroll: false
  })
}

init();

