import React, {Component} from 'react'
import ArticleList from './ArticlesList'
import DatesRange from './DatesRange'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <DatesRange />
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
}

export default App
