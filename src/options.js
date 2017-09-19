import { h, Component, options } from 'preact';


if (typeof window!=='undefined') {
	// a sensible default for animations (only really used with syncComponentUpdates=false)
	options.debounceRendering = requestAnimationFrame;

	// provides some default options:
	window.requestIdleCallbackDemo = fn => {
		if (!window.requestIdleCallback) setTimeout(fn);
		else requestIdleCallback(fn, { timeout: 100 });
	};
}


export default class Options extends Component {
	setAsync = e => {
		// `true` would force full sync, we don't want that.
		options.syncComponentUpdates = e.target.checked ? false : null;
	};

	setAsyncType = e => {
		options.debounceRendering = window[e.target.value];
	};

	render() {
		return (
			<div class="App-options">
				<h2>Preact Options</h2>

				<label>
					Async rendering:{' '}
					<input type="checkbox" onChange={this.setAsync} />
				</label>

				<label>
					Async Mechanism:{' '}
					<select onChange={this.setAsyncType}>
						<option value="requestAnimationFrame">requestAnimationFrame</option>
						<option value="requestIdleCallbackDemo">requestIdleCallback</option>
						<option value="setTimeout">setTimeout</option>
						<option value="">Preact Default (Microtask)</option>
					</select>
				</label>
				<button onClick={this.restart}>Restart</button>
			</div>
		);
	}
}