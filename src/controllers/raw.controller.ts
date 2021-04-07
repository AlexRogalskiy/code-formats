import { NowRequest, NowResponse } from '@vercel/node'
import { IncomingForm } from 'formidable'

import * as templateService from '../services/template.service'

import { sendResponse, setHeaders } from '../utils/requests'
import { serialize } from '../utils/serializers'

import { requestError, responseError } from '../errors/errors'

export async function rawController(req: NowRequest, res: NowResponse): Promise<void> {
    const form = new IncomingForm()

    form.parse(
        req,
        async (err, fields): Promise<NowResponse> => {
            setHeaders(res)

            if (err) {
                return sendResponse(res, responseError(err.message))
            }

            if (fields.data) {
                const buff = Buffer.from(fields.data.toString(), 'base64')
                const data = buff.toString()

                const imageBuffer = await templateService.templateRenderer({
                    data,
                    query: req.query,
                })

                if (!imageBuffer) {
                    return sendResponse(res, responseError(`Invalid image data: ${serialize(imageBuffer)}`))
                }

                return res.json(imageBuffer.toString('base64'))
            }

            return sendResponse(res, requestError(`Cannot process input fields data: ${serialize(fields)}`))
        }
    )
}
