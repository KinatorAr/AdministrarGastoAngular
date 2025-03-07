
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AdministrarGastoAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AdministrarGastoAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5052, hash: 'b899871f37e8a809f66725b3a76eb160300da968aa404d7b3ae5db732eeb6e87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1030, hash: 'a48451ffa46cfacc70bcfb0c19cf332b460c363581775c14e7904f5ff64add41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16934, hash: 'e779c276c952181121ce3156165aff5b16b487bc2540adcd461eb281619a9037', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-S6UB7HVJ.css': {size: 231750, hash: 'aUzJhnv3xqk', text: () => import('./assets-chunks/styles-S6UB7HVJ_css.mjs').then(m => m.default)}
  },
};
