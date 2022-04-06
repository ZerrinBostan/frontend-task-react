import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const KEY = "UFTpxHGts9GfA7G1a01q0SoLhN0MlTQG";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events/";

const TicketDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  const fetchTicketDetail = useCallback(async () => {
    const result = await axios.get(`${BASE_URL}${id}.json`, {
      params: {
        apikey: KEY,
      },
    });
    setData(result.data);
  }, [id]);

  useEffect(() => {
    fetchTicketDetail();
  }, [fetchTicketDetail]);

  return (
    <div className="container  mb-4">
      <div className="card">
        <Header text="TICKED DETAIL" />
        {data && (
          <div className="card-wrapper">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Ticket Name and Locale: {""}
                <span className="text-secondary">
                  {`${data?.name} / ${data?.locale?.toUpperCase()}`}
                </span>
              </li>
              <li className="list-group-item">
                Accessibility: {""}
                <span className="text-secondary">
                  {data?.accessibility?.ticketLimit}
                </span>
              </li>
              <li className="list-group-item">
                Price Ranges: {""}
                <span className="text-secondary">
                  {data.priceRanges > 0
                    ? data.priceRanges.map((item) => (
                        <>
                          <li className="ml-5">Type: {item?.type || "-"} </li>
                          <li className="ml-5"> Max: {item?.max || "-"} </li>
                          <li className="ml-5"> Min: {item?.min || "-"} </li>
                        </>
                      ))
                    : "-"}
                </span>
              </li>
            </ul>
            <img
              src={data.images[9].url}
              alt="ticked-img"
              className="card-img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketDetail;
