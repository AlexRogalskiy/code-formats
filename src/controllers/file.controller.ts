import { NowRequest, NowResponse } from '@vercel/node'
import { IncomingForm } from 'formidable'

import { readFile } from 'fs'

import * as templateService from '../services/template.service'

import { sendResponse, setHeaders } from '../utils/requests'
import { serialize } from '../utils/serializers'
import { single } from '../utils/commons'

import { requestError, responseError } from '../errors/errors'

export async function fileController(req: NowRequest, res: NowResponse): Promise<void> {
    const form = new IncomingForm()

    form.parse(
        req,
        async (err, _, files): Promise<NowResponse> => {
            setHeaders(res)

            if (err) {
                return sendResponse(res, responseError(err.message))
            }

            if (files.data) {
                readFile(single(files.data).path, async (err, data) => {
                    if (err) {
                        return sendResponse(res, responseError(err.message))
                    }

                    const imageBuffer = await templateService.templateRenderer({
                        data: data.toString(),
                        query: req.query,
                    })

                    if (!imageBuffer) {
                        return sendResponse(
                            res,
                            responseError(`Invalid image data: ${serialize(imageBuffer)}`)
                        )
                    }

                    return res.json(imageBuffer.toString('base64'))
                })
            }

            return sendResponse(res, requestError(`Cannot process input files data: ${serialize(files)}`))
        }
    )
}
