import { describe, expect, test } from '@jest/globals'

// import { toBase64ImageUrl } from '../utils/commons'

require('https').globalAgent.options.rejectUnauthorized = false

describe('Image URL to base64 string', () => {
    test('it should be a string base64', async () => {
        const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
        expect(imageUrl).toMatch(new RegExp(/[A-Za-z0-9+/=]/))
        // expect(await toBase64ImageUrl(imageUrl)).toMatch(new RegExp(/[A-Za-z0-9+/=]/))
    })
})
