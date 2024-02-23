import React from 'react'
import { Editor, rootCtx } from '@milkdown/core'
import { Milkdown, useEditor } from '@milkdown/react'
import { MilkdownProvider } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'

function MilkdownEditor() {
  useEditor(root =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
      })
      .use(commonmark)
  , [])

  return <Milkdown />
}

export default function() {
  return (
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  )
}
