import React from 'react';

import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
    state={
        signedIn:  window.localStorage.getItem('access_token')
    }
    changeState = (flag)=>{
        window.localStorage.setItem('access_token',flag);
        this.setState({signedIn:flag});
    }
    render(){
        return (
            <div>
                <Header signedIn={this.state.signedIn} signIn={this.changeState}/>
                <Body signedIn={this.state.signedIn} signIn={this.changeState}/>
            </div>
        );
    }
}

export default App;