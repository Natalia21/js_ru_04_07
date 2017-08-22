import {normalizedArticles as articles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(articles), action) => {
	const {type, payload} = action

	switch(type) {
		case DELETE_ARTICLE:
			return articleState.filter(article => article.id !== payload.id)
		case ADD_COMMENT:
			const article = articleState[payload.articleId]
			return {...articleState,
					[payload.articleId]: {
						...article,
						comments: [
							...article.comments,
							payload.comment.id
						]
					}
				}
	}
	return articleState
}
