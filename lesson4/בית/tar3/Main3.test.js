import { expect, test } from 'vitest'
import { sum, sumAllDigit } from './main3.js'

test('sum', () => {
    expect(sum(3, 2)).toBe(5)
    expect(sum(1)).toBe(1)
})

test('sumAllDigit', () => {
    expect(sumAllDigit(123454)).toBe(19)
})