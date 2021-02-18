import { describe, expect, test } from '@jest/globals'

import { toBase64ImageUrl } from '../utils/commons'

require('https').globalAgent.options.rejectUnauthorized = false

describe("Image URL to base64 string", () => {
    test('it should be a string base64', async () => {
        const imageUrl = "https://avatars1.githubusercontent.com/u/33148052?v=4"
        expect(await toBase64ImageUrl(imageUrl)).toMatch(new RegExp(/[A-Za-z0-9+/=]/))
    }, 5000)
})
