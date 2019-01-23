import React from 'react';

import auth from '../api/auth';

class Body extends React.Component {

    state={
        email:"",
        password:"",
    }
    onFormSubmission = (e)=>{
        e.preventDefault();
        let creedentials ={
            "email":`${this.state.email}`,
            "password":`${this.state.password}`
        }
        auth().post('/signin',creedentials)
        .then((resp, err)=>{
            if(err) throw err;
            this.props.signIn(resp.data.status);
        }).catch(err=>{
            console.log(err);
        })

    }
    render(){
        if(!this.props.signedIn)
        return (
            <div style={{ marginTop:"10vh", display:"flex",justifyContent:"center", flexDirection:"row"}}>
                <div className="form-group shadow-lg p-3 mb-5 bg-white rounded" style={{width:"400px", display:"flex", flexDirection:"column",padding:"20px"}}>
                    <legend>Login</legend>
                    <label for="exampleInputEmail1">Email address</label>
                     <input value={this.state.email} onChange={e=>{this.setState({email:e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                     <label for="exampleInputPassword1">Password</label>
                     <input value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required></input>
                     <button onClick={this.onFormSubmission} type="submit" className="btn btn-primary" style={{marginTop:"10px", alignSelf:"center"}}>Submit</button>
                 </div>
             </div>
         );
        return (
            <div>
                <p>Signed In</p>
            </div>
        );
    }
}

export default Body;