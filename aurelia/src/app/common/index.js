/**
 * Configure custom resources that can be injected
 * in the views without having to use <require>
 */

export function configure(config) {
  config.globalResources(
    './pagination/paginate-converter',
    './pagination/size-converter',
    './pagination/pager-element',
    './sorting/sort-converter',
    './filtering/filter-converter',
  );
}