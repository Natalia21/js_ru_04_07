import { createSelector } from 'reselect'
import {mapToArr} from '../helpers'

export const articlesObjectSelector = (state) => state.articles
export const articlesSelector = createSelector(articlesObjectSelector, mapToArr)

const filtersSelector = (state) => {
    return {
        selectFilter: state.selectFilter,
        dateFilter: state.dateFilter
    }
}
const commentsSelector = (state) => state.comments
const idSelector = (state, props) => props.id

export const filterArticles = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const { selectFilter, dateFilter } = filters
    const { from, to } = dateFilter

    return articles.filter(article => {
        return selectFilter.find(selected => selected == article.id) &&
            new Date(article.date).getTime() > new Date(from).getTime() &&
            new Date(article.date).getTime() < new Date(to).getTime() 
    })
})

export const commentSelectorFactory = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})
