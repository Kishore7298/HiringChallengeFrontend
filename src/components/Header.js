import React from 'react';

class Header extends React.Component {
  logout = (e)=>{
    e.preventDefault();
    this.props.signIn(0);
    window.localStorage.removeItem('access_token');
  }
    render(){
      if(!this.props.signedIn){
      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
          <a className="navbar-brand" href="#">SwitchOn</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">SwitchOn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button onClick={this.logout} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Logout</button>
          </form>
        </div>
    </nav> 
  );
  }
    
}

export default Header;