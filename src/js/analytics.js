function createAnalytics() {
	let counter =0

	const listener = () => counter++

	addEventListener( "click", listener)

	return {
		getClick() {
			return counter
		}
	}
}

window.analytics = createAnalytics()