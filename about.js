if (location.hash) {
  history.replaceState({}, document.title, location.href.split('#')[0]);
}
