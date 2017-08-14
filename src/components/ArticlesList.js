import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC'

class ArticleList extends Component {
    getSelectedArticles(articles) {
        const { selectFilter } = this.props

        return articles.filter(article => {
            return selectFilter.find(selected => {
                return selected == article.id
            })
        })
    }

    filterByDate(articles) {
        const { from, to } = this.props.dateFilter
        return articles.filter(article => {
            return new Date(article.date).getTime() > new Date(from).getTime() &&
               new Date(article.date).getTime() < new Date(to).getTime() 
        })
    }

    render() {
        const { articles, openId, toggleOpen, deleteArticle } = this.props

        const selectedArticles = this.getSelectedArticles(articles)
        const filtredByDateArticles = this.filterByDate(selectedArticles)

        const articleElements = filtredByDateArticles.map(
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
    articles: state.articles,
    dateFilter: state.dateFilter,
    selectFilter: state.selectFilter
}), { deleteArticle })(Accordion(ArticleList))
