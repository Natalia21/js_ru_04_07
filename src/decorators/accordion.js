import React, {Component} from 'react'

export default (OriginalComponent) => class AccordionDeacorator extends Component {
	state = {
		openId: null
	}

	toggleOpen = (id) => () => {
		this.setState({
			openId: id === this.state.openId ? null : id
		})
	}

	render() {
		return (
			<OriginalComponent {...this.props} openId={this.state.openId} toggleOpen={this.toggleOpen}/>
		)
	}
}
