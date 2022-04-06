import React from "react";
// import Icon from './icon/index';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Table = ({ tableHead = [], data = [] }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        {tableHead.map((item) => (
          <th scope="col" key={item.id}>
            {item.colName}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data?.length > 0 ? (
        data.map((item) => {
          const {
            id,
            images,
            name,
            locale,
            dates: {
              start: { localDate },
            },
          } = item;
          return (
            <tr key={`${id}+ ${name}`}>
              <td>
                <img
                  src={images[7].url}
                  alt="ticket-img"
                  className="img-thumbnail"
                />
              </td>
              <td>{name}</td>
              <td>{locale}</td>
              <td>{localDate}</td>
              <td>
                <Link to={`ticket-detail/${id}`}>
                  <button type="button" className="btn btn-outline-dark d-flex">
                    go to detail
                  </button>
                </Link>
              </td>
            </tr>
          );
        })
      ) : (
        <p className="text-uppercase">0 results</p>
      )}
    </tbody>
  </table>
);
const tableData = {
  id: PropTypes.string,
  images: PropTypes.string,
  name: PropTypes.string,
  locale: PropTypes.string,
  localDate: PropTypes.string,
};
const tableHeadData = {
  id: PropTypes.string,
  colName: PropTypes.string,
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(tableData)).isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.shape(tableHeadData)).isRequired,
};

export default Table;
