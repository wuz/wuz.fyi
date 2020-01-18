(() => {
  let svgColor = '#0e161a';
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    svgColor = '#f2e9de';
  }
  const faviconSvg = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="${svgColor}"><path d="M12 24a1 1 0 01-1-1c0-2.757 2.243-5 5-5a1 1 0 110 2c-1.654 0-3 1.346-3 3a1 1 0 01-1 1zm-4-4a1 1 0 110-2c1.654 0 3-1.346 3-3a1 1 0 112 0c0 2.757-2.243 5-5 5zm4 4a1 1 0 01-1-1c0-1.654-1.346-3-3-3a1 1 0 110-2c2.757 0 5 2.243 5 5a1 1 0 01-1 1zm4-4c-2.757 0-5-2.243-5-5a1 1 0 112 0c0 1.654 1.346 3 3 3a1 1 0 110 2zm3-10a1 1 0 01-1-1c0-2.757 2.243-5 5-5a1 1 0 110 2c-1.654 0-3 1.346-3 3a1 1 0 01-1 1zm-4-4a1 1 0 110-2c1.654 0 3-1.346 3-3a1 1 0 112 0c0 2.757-2.243 5-5 5zm4 4a1 1 0 01-1-1c0-1.654-1.346-3-3-3a1 1 0 110-2c2.757 0 5 2.243 5 5a1 1 0 01-1 1zm4-4c-2.757 0-5-2.243-5-5a1 1 0 112 0c0 1.654 1.346 3 3 3a1 1 0 110 2zM6 4a1 1 0 01-1-1V1a1 1 0 012 0v2a1 1 0 01-1 1zm0 8a1 1 0 01-1-1V9a1 1 0 012 0v2a1 1 0 01-1 1zm0-5c-.26 0-.52-.11-.71-.29C5.11 6.52 5 6.26 5 6c0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM3 7H1a1 1 0 010-2h2a1 1 0 010 2zm8 0H9a1 1 0 010-2h2a1 1 0 010 2z"/><circle cx="5" cy="23" r="1"/><circle cx="2" cy="16" r="1"/><circle cx="19" cy="23" r="1"/><circle cx="12" cy="11" r="1"/><circle cx="20" cy="15" r="1"/></g></svg>`;

  const dataURI = `data:image/svg+xml;base64,${window.btoa(faviconSvg)}`;
  console.log(dataURI);

  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'shortcut icon';
  link.href = dataURI;
  document.getElementsByTagName('head')[0].appendChild(link);
})();
