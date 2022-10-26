import React, { forwardRef, useRef, ReactNode, useMemo } from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { spacing } from "../theme"

export interface FormProps {
  /**
   * A style modifier for different input states.
   */
  submitAfterLastInput?: boolean
  /**
   * Style for the outer content container useful for padding & margin.
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * TODO: Validation handler?
   */
  autoFocus?: boolean
  /**
   * Input children
   */
  children: ReactNode
}

const getInputs = (children) =>
  React.Children.toArray(children).reduce((partialInputs, child) => {
    if (child && child.props && child.props.children) {
      return partialInputs.concat(getInputs(child.props.children))
    }
    if (child && child.props && !!child.props.name) return partialInputs.concat(child)
    return partialInputs
  }, [])

/**
 * A component that allows for the entering and editing of text.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-TextField.md)
 */
export const Form = forwardRef(function Form(props: FormProps) {
  const { containerStyle: $containerStyleOverride, children } = props

  const inputs = useMemo(() => {
    return getInputs(children)
  }, [children])
  const inputRefs = useRef({})

  const $containerStyles = [$containerStyle, $containerStyleOverride]

  return <View style={$containerStyles}>{children}</View>
})

const $containerStyle: TextStyle = {
  padding: spacing.medium,
}
