import { Optional } from '../../typings/standard-types'
import { ThemePattern } from '../../typings/enum-types'
import { ThemeOptions } from '../../typings/domain-types'

/**
 * ThemeRecord
 * @desc Type representing theme config options
 */
export type ThemeRecord = Record<ThemePattern, ThemeOptions>

/**
 * Theme mappings
 * @desc Type representing supported theme mappings
 */
const themes: Readonly<ThemeRecord> = {
    'default': {
        quoteColor: '2f80ed',
        authorColor: '333',
        bgColor: 'fffefe',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'default-repocard': {
        quoteColor: '2f80ed',
        authorColor: '333',
        bgColor: 'fff8dc',
        colorPattern: 'ffe0e9',
        opacity: 0.7,
    },
    'dark': {
        quoteColor: 'fff',
        authorColor: '9f9f9f',
        bgColor: '151515',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'radical': {
        quoteColor: 'fe428e',
        authorColor: 'a9fef7',
        bgColor: '141321',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'merko': {
        quoteColor: 'abd200',
        authorColor: '68b587',
        bgColor: '0a0f0b',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'gruvbox': {
        quoteColor: 'fabd2f',
        authorColor: '8ec07c',
        bgColor: '282828',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'tokyonight': {
        quoteColor: '70a5fd',
        authorColor: '38bdae',
        bgColor: '1a1b27',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'onedark': {
        quoteColor: 'e4bf7a',
        authorColor: 'df6d74',
        bgColor: '282c34',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'cobalt': {
        quoteColor: 'e683d9',
        authorColor: '75eeb2',
        bgColor: '193549',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'synthwave': {
        quoteColor: 'e2e9ec',
        authorColor: 'e5289e',
        bgColor: '2b213a',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'highcontrast': {
        quoteColor: 'e7f216',
        authorColor: 'fff',
        bgColor: '000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'dracula': {
        quoteColor: 'ff6e96',
        authorColor: 'f8f8f2',
        bgColor: '282a36',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'prussian': {
        quoteColor: 'bddfff',
        authorColor: '6e93b5',
        bgColor: '172f45',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'monokai': {
        quoteColor: 'eb1f6a',
        authorColor: 'f1f1eb',
        bgColor: '272822',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'vue': {
        quoteColor: '41b883',
        authorColor: '273849',
        bgColor: 'fffefe',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'vue-dark': {
        quoteColor: '41b883',
        authorColor: 'fffefe',
        bgColor: '273849',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'shades-of-purple': {
        quoteColor: 'fad000',
        authorColor: 'a599e9',
        bgColor: '2d2b55',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'nightowl': {
        quoteColor: 'c792ea',
        authorColor: '7fdbca',
        bgColor: '011627',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'buefy': {
        quoteColor: '7957d5',
        authorColor: '363636',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: 0.7,
    },
    'blue-green': {
        quoteColor: '2f97c1',
        authorColor: '0cf574',
        bgColor: '350338',
        colorPattern: 'ffe0e9',
        opacity: 0.8,
    },
    'algolia': {
        quoteColor: '00aeff',
        authorColor: 'eff00a',
        bgColor: '050f2c',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'great-gatsby': {
        quoteColor: 'ffa726',
        authorColor: 'ffd95b',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'darcula': {
        quoteColor: 'ba5f17',
        authorColor: 'bebebe',
        bgColor: '242424',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'bear': {
        quoteColor: 'e03c8a',
        authorColor: 'bcb28d',
        bgColor: '1f2023',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'solarized-dark': {
        quoteColor: '268bd2',
        authorColor: '859900',
        bgColor: '002b36',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'solarized-light': {
        quoteColor: '268bd2',
        authorColor: '859900',
        bgColor: 'fdf6e3',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'chartreuse-dark': {
        quoteColor: '7fff00',
        authorColor: 'f007ff',
        bgColor: '000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'nord': {
        quoteColor: '81a1c1',
        authorColor: 'd8dee9',
        bgColor: '2e3440',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'gotham': {
        quoteColor: '2aa889',
        authorColor: '99d1ce',
        bgColor: '0c1014',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'material-palenight': {
        quoteColor: 'c792ea',
        authorColor: 'a6accd',
        bgColor: '292d3e',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'graywhite': {
        quoteColor: '24292e',
        authorColor: '24292e',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'vision-friendly-dark': {
        quoteColor: 'ffb000',
        authorColor: 'ffbb00',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'ayu-mirage': {
        quoteColor: 'f4cd7c',
        authorColor: 'c7c8c2',
        bgColor: '1f2430',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'midnight-purple': {
        quoteColor: '9745f5',
        authorColor: '9846f6',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'calm': {
        quoteColor: 'e07a5f',
        authorColor: 'ebcfb2',
        bgColor: '373f51',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'flag-india': {
        quoteColor: 'ff8f1c',
        authorColor: '509E2F',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'omni': {
        quoteColor: 'FF79C6',
        authorColor: 'E1E1E6',
        bgColor: '191622',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'react': {
        quoteColor: '61dafb',
        authorColor: '64ddff',
        bgColor: '20232a',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'jolly': {
        quoteColor: 'ff64da',
        authorColor: 'fd99ff',
        bgColor: '291B3E',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'maroongold': {
        quoteColor: 'F7EF8A',
        authorColor: 'E0AA3E',
        bgColor: '260000',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'yeblu': {
        quoteColor: 'ffdd99',
        authorColor: 'ffee99',
        bgColor: '002046',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'blueberry': {
        quoteColor: '82aaff',
        authorColor: '27e8a7',
        bgColor: '242938',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'slateorange': {
        quoteColor: 'faa627',
        authorColor: 'fdd789',
        bgColor: '36393f',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'kacho-ga': {
        quoteColor: 'bf4a3f',
        authorColor: 'd9c8a9',
        bgColor: '402b23',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
    'arabesque': {
        quoteColor: '0a83dc',
        authorColor: 'd9c8a9',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: 0.3,
    },
}

/**
 * Returns {@link ThemeOptions} by input {@link ThemePattern} value
 * @param value initial input {@link ThemePattern} to fetch by
 */
export const getTheme = (value: Optional<ThemePattern>): ThemeOptions => {
    return value ? themes[value] : themes[ThemePattern.default]
}
