import test from 'ava'
import {evaluate} from './index.js'

test('main', async (t) => {
  t.is(await evaluate(() => 1 + 2), 3)
  t.is(await evaluate('2 ** 3'), 8)

  const imageType = await evaluate(async () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve)
    })

    return blob.type
  })

  t.is(imageType, 'image/png')
})
