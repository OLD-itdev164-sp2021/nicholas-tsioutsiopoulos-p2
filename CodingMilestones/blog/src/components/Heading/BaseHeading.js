import { Heading } from 'rebass'
import PropTypes from 'prop-Types'
import React from 'react'

const BaseHeading = ({ children, ...rest }) =>
<Heading {...rest}>
    { children }
</Heading>

BaseHeading.propTypes = {
    children: PropTypes.node.isRequired
}

export { BaseHeading }