import React from 'react'
import styles from './replaceText.module.css'

class ReplaceText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Hi, I'm robot"
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ text: "I can see you are reading this page right now :)" });
		}, 5000);
	}

	render() {
		return (
			<div>
				<div className={styles.background}>
					<h2>1. ReplaceText Task:</h2>
					{this.state.text}</div>
			</div>
		)
	}
}

export default ReplaceText;