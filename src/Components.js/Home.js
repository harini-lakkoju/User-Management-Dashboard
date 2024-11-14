import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:[]
    }
  }
  componentDidMount() {
  fetch('http://localhost:4000/posts', { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((res) => {
      console.log('Fetched Data:', res); // Check what data is being fetched
      this.setState({ data: res });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

  render() {
    const{data}=this.state
    return (
      <div>
        <div className='container mt-3'>
          <h1>User Management Database</h1>
        </div>
        <table className='container mt-5 table table-bordered table-responsive table-hover'>
          <thead>
            <tr className='table-success'>
              <th>Id</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x,i)=>
              <tr key={i}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.mobile}</td>
                <td>{x.email}</td>
                {/* <td>
                  <a href={"/Edit/"+x.id} className='btn btn-warning'>Edit</a>
                  &nbsp;
                  <a href={"/Delete/"+x.id} className='btn btn-danger'>Delete</a>
                </td> */}
                <td>
                <Link to={`/edit/${x.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    &nbsp;
                   
                    <Link to={`/delete/${x.id}`} className="btn btn-danger">
                      Delete
                    </Link>
</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default Home
