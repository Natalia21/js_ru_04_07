import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

function ArticleList({ articles, openId, toggleOpen}) {
    const articleElements = articles.map(
    	article => (
    		<li key = {article.id}>
    			<Article article = {article} isOpen={openId == article.id} toggleOpen={toggleOpen(article.id)}/>
    		</li>
    	)
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.PropTypes = {
	articles: PropTypes.array,
	openId: PropTypes.bool,
	toggleOpen: PropTypes.bool
}

export default Accordion(ArticleList)