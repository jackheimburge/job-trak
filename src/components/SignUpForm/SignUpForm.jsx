import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password, username, confirm } = this.state
      const formData = { name, email, password, username };
      if (!/^[a-zA-Z-' ]*$/.test(name)) {
        this.setState({ error: 'Invalid name' });
        return;
      }

      // Email validation
      if (!/\S+@\S+\.\S+/.test(email)) {
        this.setState({ error: 'Invalid email' });
        return;
      }

      // Password validation
      if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
        this.setState({ error: 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character' });
        return;
      }

      // Confirm password validation
      if (password !== confirm) {
        this.setState({ error: 'Passwords do not match' });
        return;
      }

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed -- Try Again' })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" className='btn btn-success' disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

