import React, {Component} from 'react'

export default (OriginalComponent) => class DeacoratedComponent extends Component {
	state = {
		isOpen: false
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
		)
	}
}
