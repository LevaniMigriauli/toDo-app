import React, { useMemo } from 'react'

const Icon = props =>
  useMemo(() => {
    let addProps = {}
    if (props.onClick) addProps.onClick = props.onClick
    return (
      <svg
        style={{display: "inline-block"}}
        viewBox={props.view}
        xmlns="http://www.w3.org/2000/svg"
        {...addProps}
      >
        <use xlinkHref={`#${props.name}`} href={`#${props.name}`} />
      </svg>
    )
  }, [props])

export default Icon
