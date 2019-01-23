import React from 'react';

import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
    state={
        signedIn: 0
    }
    changeState = (flag)=>{
        this.setState({signedIn:flag});
    }
    render(){
        return (
            <div>
                <Header signedIn={this.state.signedIn} />
                <Body signedIn={this.state.signedIn} signIn={this.changeState}/>
            </div>
        );
    }
}

export default App;