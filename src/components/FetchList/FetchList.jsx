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
		fetch("https://date.nager.at/api/v3/PublicHolidays/2021/GB")
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
						<div key={item.date}>{item.localName}</div>
					)
				})}
				</div>
			</div>
		);
	}
}

export default FetchList