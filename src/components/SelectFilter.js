import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelectFilter } from '../AC'
import { articlesSelector } from '../selectors'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    handleChange = selected => this.props.setSelectFilter(selected.map(option => option.value))

    render() {
        const { articles, selectFilter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectFilter}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selectFilter: state.selectFilter,
    articles: articlesSelector(state)
}), { setSelectFilter })(SelectFilter)