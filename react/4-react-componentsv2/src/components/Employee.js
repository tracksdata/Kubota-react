import React, { Component } from 'react';

class Employee extends Component {
    renderEmployees() {

        let employees = [
            { "empid": 1, "empname": "Charlie", "salary": "0741482207", "email": "cstobbe0@techcrunch.com" },
            { "empid": 2, "empname": "Rosabel", "salary": "9055167886", "email": "rhearthfield1@canalblog.com" },
            { "empid": 3, "empname": "Milka", "salary": "5722650552", "email": "melby2@nytimes.com" },
            { "empid": 4, "empname": "Dewey", "salary": "8002995848", "email": "dantoni3@cisco.com" },
            { "empid": 5, "empname": "Thaine", "salary": "6663311727", "email": "trains4@imdb.com" },
            { "empid": 6, "empname": "Gerda", "salary": "1668695294", "email": "gmacpharlain5@mashable.com" },
            { "empid": 7, "empname": "Hugh", "salary": "0458407690", "email": "hbowcher6@dot.gov" },
            { "empid": 8, "empname": "Stace", "salary": "7893459328", "email": "sdezamora7@a8.net" },
            { "empid": 9, "empname": "Chiquita", "salary": "5613009627", "email": "cdelia8@nsw.gov.au" },
            { "empid": 10, "empname": "Nellie", "salary": "5023913295", "email": "nwillacot9@dell.com" }]
        return employees.map((emp, index) => {
            return (
                <tr key={index}>
                    <td>{emp.empid}</td>
                    <td>{emp.empname}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.email}</td>
                </tr>
            )

        })
    }
    render() {
        return (
            <div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Employees</div>
                        <div className="card-body">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                        <th>email</th>

                                    </tr>
                                </thead>



                                <tbody>
                                    {this.renderEmployees()}
                                </tbody>





                            </table>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Employee;