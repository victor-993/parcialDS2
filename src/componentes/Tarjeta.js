import React from "react";
import useApi from "../hooks/useApi";
import "./Estilo.css";

const Tarjeta = ({ url }) => {
  const { data, error, loading } = useApi(url);

  const fill = (number, len) =>
    "0".repeat(len - number.toString().length) + number.toString();

  const spe = (name) => {
    name.replace("cial-", " ");
    return name;
  };

  const tip = (ti) => {
    return (<span className={`background-color-${ti}`}>{` ${ti}`}</span>)
  }

  
  return (
    !loading && (
      <div className="card">
        <img
          src={data.sprites.front_default}
          className="card-img-top"
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name.replace("-", " ")}</h5>
          <p className="card-text">{`Number: ${data.id}`}</p>
          <p className="card-text">Types: {data.types.map(
            (tipo, index) => {const ti = tipo.type.name
            return <span key={index}className={`background-color-${ti} tipo`}>{`${ti}`} </span>}
          )}</p>
          <div className="stat">
            <p className="card-text">{`Weight: ${data.weight}`}</p>
            <p className="card-text">{`Height: ${data.height}`}</p>

            {data.stats.map((tadi) => (
              <p className="card-text">{`${tadi.stat.name.replace("cial-", " ")}: ${
                tadi.base_stat
              }`}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Tarjeta;
