import React from 'react';

import Header from './components/Header';

class App extends React.Component {
    render(){
        return (
            <div>
                <Header state={1} />
                <p>Hello</p>
            </div>
        );
    }
}

export default App;