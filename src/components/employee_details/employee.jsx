import Navbar from "../navbar/Navbar";
import "./employee.css";

function Employee() {
  let i = 1;
  return (
    <>
      <Navbar />
      <div className="employee-details">
        <table>
            <thead>

          <th>S.No</th>
          <th>Employee Name</th>
          <th>Employee Id</th>
          <th>Work Location </th>
          <th>Address</th>
          <th>Contact No</th>
          <th>Edit / Delete</th>
            </thead>
          <tbody>
            <tr>
              <td>{i++}</td>
              <td>Krishna</td>
              <td>E 101</td>
              <td>Mylleripalayam</td>
              <td>Anna street,Mill Gate</td>
              <td>9925629802</td>
              <td className="action-buttons"></td>
            </tr>
            <tr>
              <td>{i++}</td>
              <td>Mukesh</td>
              <td>E 102</td>
              <td>Sundrapuram</td>
              <td>MGR nagar,Sundrapuram</td>
              <td>9925629802</td>
              <td className="action-buttons"></td>
            </tr>
            <tr>
              <td>{i++}</td>
              <td>Sakthi</td>
              <td>E 103</td>
              <td>Othakkalmandapam</td>
              <td>Periyar street,Othakkalmandapam</td>
              <td>9925629802</td>
              <td className="action-buttons"></td>
            </tr>
            <tr>
              <td>{i++}</td>
              <td>Krishna</td>
              <td>E 101</td>
              <td>Mylleripalayam</td>
              <td>Anna street,Mill Gate</td>
              <td>9925629802</td>
              <td className="action-buttons"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employee;
