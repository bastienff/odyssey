// External
const ns = require('util-news-selectors');

const NEWLINE = '\n';
const HYPHEN = '-';
const CSS_URL = /url\('?"?(.*?)"?'?\)/;
const ALIGNMENT_PATTERN = /(left|right)/;
const RATIO_PATTERN = /(\d+x\d+)/;
const SM_RATIO_PATTERN = /sm(\d+x\d+)/;
const MD_RATIO_PATTERN = /md(\d+x\d+)/;
const LG_RATIO_PATTERN = /lg(\d+x\d+)/;

const SELECTORS = {
  GLOBAL_NAV: '#abcHeader.global',
  MAIN: ns('main'),
  STORY: ns('story'),
  SHARE_TOOLS: '.share-tools-list, .share, .tools',
  BYLINE: '.view-byline, header > .attribution, .byline',
  INFO_SOURCE: '.bylinepromo, .program',
  INFO_SOURCE_LINK: '.bylinepromo > a, .program > a',
  EMBED: ns('embed'),
  LEFT_EMBED: ns('embed:left'),
  RIGHT_EMBED: ns('embed:right'),
  WYSIWYG_EMBED: ns('embed:wysiwyg')
};

const RICHTEXT_BLOCK_TAGNAMES = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'OL', 'UL'];
const EMBED_TAGNAMES = ['ASIDE', 'BLOCKQUOTE', 'DIV', 'FIGURE'];

const MOCK_NODE = {
  parentNode: null,
  parentElement: null,
  previousSibling: null,
  nextSibling: null,
  childNodes: [],
  firstChild: null,
  lastChild: null,
  textContent: ''
};

const MOCK_ELEMENT = Object.assign(
  {
    tagName: 'MOCK-ELEMENT',
    attributes: [],
    name: '',
    className: '',
    classList: [],
    previousElementSibling: null,
    nextElementSibling: null,
    children: [],
    childElementCount: 0,
    firstElementChild: null,
    lastElementChild: null,
    innerHTML: '',
    getAttribute: _ => '',
    hasAttribute: _ => false
  },
  MOCK_NODE
);

const REM = 16; // (px)
const MQ = {
  SM: '(max-width: 43.6875rem)',
  MD: '(min-width: 43.75rem) and (max-width: 61.1875rem)',
  LG: '(min-width: 61.25rem)',
  NOT_SM: '(min-width: 43.75rem)',
  NOT_MD: '(max-width: 43.6875rem), (min-width: 61.25rem)',
  NOT_LG: '(max-width: 61.1875rem)',
  PORTRAIT: '(orientation: portrait)',
  LANDSCAPE: '(orientation: landscape)',
  GT_4_3: '(min-aspect-ratio: 4/3)'
};

const SMALLEST_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAAAADs=';

const IS_PREVIEW = window.location.hostname.indexOf('nucwed') > -1;

const MS_VERSION = (ua => {
  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(uaUA.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
})(window.navigator.userAgent);

const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const SUPPORTS_PASSIVE = (isSupported => {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function() {
        isSupported = true;
      }
    });

    window.addEventListener('test', null, options);
  } catch (err) {}

  return isSupported;
})(false);

module.exports = {
  NEWLINE,
  HYPHEN,
  CSS_URL,
  ALIGNMENT_PATTERN,
  RATIO_PATTERN,
  SM_RATIO_PATTERN,
  MD_RATIO_PATTERN,
  LG_RATIO_PATTERN,
  SELECTORS,
  RICHTEXT_BLOCK_TAGNAMES,
  EMBED_TAGNAMES,
  MOCK_NODE,
  MOCK_ELEMENT,
  REM,
  MQ,
  SMALLEST_IMAGE,
  IS_PREVIEW,
  MS_VERSION,
  IS_IOS,
  SUPPORTS_PASSIVE
};
