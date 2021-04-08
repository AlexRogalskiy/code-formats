import { Optional } from '../../typings/standard-types'
import { ThemePattern } from '../../typings/enum-types'
import { CarbonFormatOptions } from '../../typings/domain-types'

/**
 * ThemeRecord
 * @desc Type representing theme config options
 */
export type ThemeRecord = Record<ThemePattern, CarbonFormatOptions>

/**
 * Theme mappings
 * @desc Type representing supported theme mappings
 */
const themes: Readonly<ThemeRecord> = {
    default: {
        bg: '#FFFFFF',
        ds: false,
        dsblur: '50px',
        dsyoff: '20px',
        es: '2x',
        fm: 'Fira Code',
        fs: '18px',
        l: 'auto',
        lh: '110%',
        ln: false,
        pv: '0',
        ph: '0',
        t: 'material',
        si: false,
        wa: true,
        wc: true,
        wt: 'none',
        wm: false,
    },
}

/**
 * Returns {@link CarbonFormatOptions} by input {@link ThemePattern} value
 * @param value initial input {@link ThemePattern} to fetch by
 */
export const getTheme = (value: Optional<ThemePattern>): CarbonFormatOptions => {
    return value ? themes[value] : themes[ThemePattern.default]
}
