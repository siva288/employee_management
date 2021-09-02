import "./App.css";
import {Link} from "react-router-dom";
function Login()
{
    return(
        <div>
              <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <nav className='navbar nav'>
            <h2>Employee Management System</h2>
            <ul className='list'>
              <button className=' btn btn-success button'><Link className='button1' exact to='/add'>Sign Up</Link></button>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 in2"> 
            <div className="loginbox">
                User name<input type="text" className="ins"/><br />
                Password<input type="password" className="ins"/>
                <button className="btn btn-success">Login</button>
            </div>
        </div>
      </div>
        </div>
    );
}
export default Login;