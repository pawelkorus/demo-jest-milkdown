import React from 'react'
import { Editor, rootCtx } from '@milkdown/core'
import { Milkdown, useEditor } from '@milkdown/react'

export default function () {
  useEditor(root =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
      })
  , [])

  return <Milkdown />
}
