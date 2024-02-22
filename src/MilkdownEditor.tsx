import React from 'react'
import { Editor, rootCtx } from '@milkdown/core'
import { Milkdown, useEditor } from '@milkdown/react'
import { MilkdownProvider } from '@milkdown/react'

function MilkdownEditor() {
  useEditor(root =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
      })
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
