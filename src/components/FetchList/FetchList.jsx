import React from 'react'
import styles from './fetchList.module.css'

class FetchList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		fetch("http://universities.hipolabs.com/search?name=lviv")
			.then((res) => res.json())
			.then((nData) => this.setState({ data: nData }))
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<div className={styles.background}>
				<h2>2. FetchList Task:</h2>
				<div>{this.state.data.map((item) => {
					return (
						<div key={item.web_pages}>{item.name}</div>
					)
				})}
				</div>
			</div>
		);
	}
}

export default FetchList