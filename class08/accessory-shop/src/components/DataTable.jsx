import { useRef } from "react";
import "./DataTable.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const DataTable = ({ data, onDelete, onSearch, onSort }) => {
  const sRef = useRef();

  const handleSearch = () => {
    const keyword = sRef.current.value;
    onSearch(keyword);
  };

  return (
    <Container>
      <input type="text" placeholder="Search..." ref={sRef} />{" "}
      <Button onClick={handleSearch}>Search</Button>
      <span>Sort</span>
      <i className="bi bi-arrow-up-square" onClick={() => onSort("asc")}></i>
      <i className="bi bi-arrow-down-square" onClick={() => onSort("desc")}></i>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <i className="bi bi-trash" onClick={() => onDelete(index)}></i>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default DataTable;
