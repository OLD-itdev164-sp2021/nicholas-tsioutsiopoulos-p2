import { IconButton } from './IconButton'
import { ThemeConsumer } from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

export const SearchButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...props} />}
    </ThemeConsumer>
)

SearchButton.propTypes = {
    variant: PropTypes.string
}