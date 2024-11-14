import React, { Component } from 'react';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',	
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    }).then((result) => {
      console.log(result);
      if (result.status === 201) {
        alert('Record Saved Successfully');
        this.setState({ name: '', mobile: '', email: '' });
      }
    });
  };

  render() {
    const { name, mobile, email } = this.state;
    return (
      <div>
        <div className="container">
          <div className="alert alert-success">
            <h1>Add User</h1>
          </div>
          <form onSubmit={this.submitHandler}>
            <div className="row mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.changeHandler}
                  name="name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={mobile}
                  onChange={this.changeHandler}
                  name="mobile"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
