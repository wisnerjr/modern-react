import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (!this.state.lat && !this.state.errorMessage)  return <div>Loading!</div>;
        
        return (
            this.state.lat ?
            (<div>
                Latitude: {this.state.lat} 
            </div>) :
            (<div>
                Error: {this.state.errorMessage}
            </div>)
        );

        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);