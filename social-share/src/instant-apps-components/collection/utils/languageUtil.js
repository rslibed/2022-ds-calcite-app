import { loadModules } from './loadModules';
export const languageMap = new Map([
  ['ar', 'ar'],
  ['bg', 'bg'],
  ['bs', 'bs'],
  ['ca', 'ca'],
  ['cs', 'cs'],
  ['da', 'da'],
  ['de', 'de'],
  ['el', 'el'],
  ['en', 'en'],
  ['es', 'es'],
  ['et', 'et'],
  ['fi', 'fi'],
  ['fr', 'fr'],
  ['he', 'he'],
  ['hr', 'hr'],
  ['hu', 'hu'],
  ['id', 'id'],
  ['it', 'it'],
  ['ja', 'ja'],
  ['ko', 'ko'],
  ['lt', 'lt'],
  ['lv', 'lv'],
  ['nb', 'nb'],
  ['nl', 'nl'],
  ['pl', 'pl'],
  ['pt-br', 'pt-BR'],
  ['pt-pt', 'pt-PT'],
  ['ro', 'ro'],
  ['ru', 'ru'],
  ['sk', 'sk'],
  ['sl', 'sl'],
  ['sr', 'sr'],
  ['sv', 'sv'],
  ['th', 'th'],
  ['tr', 'tr'],
  ['uk', 'uk'],
  ['vi', 'vi'],
  ['zh-cn', 'zh-CN'],
  ['zh-hk', 'zh-HK'],
  ['zh-tw', 'zh-TW'],
]);
// rtl
export function getElementDir(el) {
  return getElementProp(el, 'dir', 'ltr');
}
function getElementProp(el, prop, value) {
  const closestWithProp = el.closest(`[${prop}]`);
  return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}
// css
export const CSS_UTILITY = {
  rtl: 'arcgis--rtl',
};
export async function formatNumber(number, options) {
  const { api = 4, type = 'decimal', places = 2 } = options || {};
  if (api === 4) {
    const [intl] = await loadModules(['esri/intl']);
    const numberFormatIntlOptions = intl.convertNumberFormatToIntlOptions({
      places,
      type,
      digitSeparator: true,
    });
    return intl.formatNumber(number, numberFormatIntlOptions);
  }
  const [dojoNumber] = await loadModules(['dojo/number']);
  return dojoNumber.format(number, {
    type,
    places,
  });
}
