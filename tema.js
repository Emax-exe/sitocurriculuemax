/* Tema chiaro/scuro condiviso da tutte le pagine.
   Va caricato nel <head> senza defer, così il tema è applicato prima del rendering.
   I colori dei due temi sono in stile.css (:root e :root[data-theme="dark"]). */
(function () {
  var root = document.documentElement;

  try {
    root.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch (e) {
    root.dataset.theme = 'light';
  }

  window.toggleTheme = function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
})();
