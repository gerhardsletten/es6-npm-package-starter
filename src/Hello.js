import React, {Component, PropTypes } from 'react'

class Hello extends Component {

  render () {
    const { name } = this.props
    return (
      <p>Hello {name}</p>
    )
  }
}

Hello.defaultProps = {
  name: 'World'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
