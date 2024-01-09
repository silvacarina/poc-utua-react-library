import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import Button from './index'

describe('Button component', () => {
  it('Button component renders correctly', () => {
    const component = renderer.create(
      <Button label="Submit" />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('prop working', () => {
    const component = renderer.create(
      <Button type="reset" label="Reset" />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})