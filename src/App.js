import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import placeholder from './Sample';

const Editor = (props) => {
	return (
	<div className="Editor">
	<h3 className="Header">Editor</h3>
	<textarea 
	id="editor" 
	value={props.markdown}
	onChange={props.onChange}
	type="text"
	>
	</textarea>
	</div>
	);
}

const Previewer = (props) => {
	return (
	<div id="preview" className="Previewer">
	<h3 className="Header">Preview</h3>
	<ReactMarkdown className="Markdown"
	  source={props.markdown}
	  escapeHtml={false}
	/>
	</div>
	);
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			markdown: placeholder,
			loaded: false
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		this.setState({
			markdown: e.target.value
		});
	}
	

	
	render(){
		  return (
			<div className="App">
			  <Editor markdown={ this.state.markdown } onChange={this.handleChange} />
			  <Previewer markdown={ this.state.markdown } />
			</div>
		  );
	  }
}

export default App;
