import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC'
import { filterArticles } from '../selectors'

class ArticleList extends Component {
    render() {
        const { articles, openId, toggleOpen, deleteArticle } = this.props

        const articleElements = articles.map(
            article => (
                <li key = {article.id}>
                    <Article article = {article}
                        handleDelete = {deleteArticle}
                        isOpen = {openId == article.id}
                        toggleOpen = {toggleOpen(article.id)}/>
                </li>
            )
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.PropTypes = {
	articles: PropTypes.array,
	openId: PropTypes.bool,
	toggleOpen: PropTypes.bool,
    deleteArticle: PropTypes.func.isRequired
}

export default connect((state) => ({
    articles: filterArticles(state)
}), { deleteArticle })(Accordion(ArticleList))
