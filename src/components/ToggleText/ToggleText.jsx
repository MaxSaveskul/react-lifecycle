import React from 'react'
import styles from './toggleText.module.css'

class ToggleText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showText: false,
			countClicks: 0
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidUpdate() {
		console.log(this.state.countClicks);
	}

	handleClick() {
		this.setState({
			showText: !this.state.showText,
			countClicks: this.state.countClicks + 1
		});
	}

	render() {
		return (
			<div className={styles.background}>
				<h2>3. ToggleText Task:</h2>
				<button onClick={() => this.handleClick()} >
					{this.state.showText ?
						(<span>Hide</span>) :
						(<span>Show</span>)
					}
				</button>
				{this.state.showText && <div>You clicked the button {this.state.countClicks} times</div>}
			</div>
		)
	}
}

export default ToggleText;