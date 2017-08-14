import React, {Component} from 'react'
import ArticleList from './ArticlesList'
import DatesRange from './DatesRange'
import SelectFilter from './SelectFilter'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SelectFilter />
                <DatesRange />
                <ArticleList />
            </div>
        )
    }
}

export default App
