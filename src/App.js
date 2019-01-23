import React from 'react';

import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
    render(){
        return (
            <div>
                <Header state={1} />
                <Body />
            </div>
        );
    }
}

export default App;