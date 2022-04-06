import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Table from "../components/Table";
import PaginationItem from "../components/Pagination";
import { setTicketList } from "../stores/ticket/actions";
import SearchContent from "../components/Search";

const KEY = "UFTpxHGts9GfA7G1a01q0SoLhN0MlTQG";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

const tableHead = [
  { colName: "#", id: "col0" },
  { colName: "Name", id: "col1" },
  { colName: "Age Restrictions", id: "col2" },
  { colName: "Date", id: "col3" },
  { colName: "Detail", id: "col4" },
];

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.ticketReducer.ticketList);
  const [paginationData, paginationSetData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchTicket = useCallback(async () => {
    const result = await axios.get(BASE_URL, {
      params: {
        apikey: KEY,
        page: activePage,
      },
    });
    const { page } = result.data;

    dispatch(setTicketList(result.data["_embedded"]?.events) || []);
    paginationSetData(page);
  }, [dispatch, activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setLoading(true);
    setTimeout( async() => {
      const result = await axios.get(BASE_URL, {
        params: {
          apikey: KEY,
          page: activePage,
          keyword: searchTerm,
        },
      });
      const { page } = result.data;
      dispatch(setTicketList(result.data["_embedded"]?.events || []));
      paginationSetData(page);
      setLoading(false);
    }, 1000);

  };

  useEffect(() => {
    fetchTicket();
  }, [fetchTicket]);

  return (
    <div className="container home">
      <Header text="TICKET" className="mb-4" />
      <SearchContent handleSearch={handleSearch} loading={loading} />
      <Table tableHead={tableHead} data={events} />
      {paginationData && (
        <PaginationItem
          pageCount={paginationData.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home;
