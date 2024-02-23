import React from 'react'
import { render, act } from '@testing-library/react'
import MilkdownEditor from '../src/MilkdownEditor'

test('test milkdown editor', () => {
  act(() => {
    render(<MilkdownEditor />)
  })
})
