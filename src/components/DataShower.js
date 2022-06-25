import React, { useState } from "react";
import { useSelector } from "react-redux";
import { generateJWT } from "../helper/jwt";
import { toJson } from "../helper/toJson";
import { useForm } from "../hook/useForm";
import exportFromJSON from "export-from-json";
import { FileExport } from "./FileExport";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";

export const DataShower = () => {
  const { data } = useSelector((state) => state.text);

  const [formValues, handleInputChange] = useForm({
    delimitador: ";",
    key: "",
  });

  const { delimitador, key } = formValues;

  const [json, setjson] = useState();

  const handleDownloadJSON = (e) => {
    const data = json;
    const fileName = "EncryptedJSON";
    let exportType = exportFromJSON.types.json;
    exportFromJSON({ data, fileName, exportType });
  };

  const handleDownloadXML = (e) => {
    const data = json;
    const fileName = "EncryptedXML";
    let exportType = exportFromJSON.types.xml;
    exportFromJSON({ data, fileName, exportType });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // toJson(data,delimitador);
    setjson(toJson(data, delimitador, key));
    // console.log()
  };

  return (
    <>
    <div className="row">
        <div className="col">
        <div className="card mt-4">
        <div className="card-header">Informacion Guardada:</div >
        <div className="card-body">
        <ul className="list">
          {data.map((elem) => (
            <li key={elem} className="list-item">
              {elem}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="text"
                placeholder="Delimitador"
                name="delimitador"
                autoComplete="off"
                value={delimitador}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-4">
              <input
                className="form-control"
                type="text"
                placeholder="Llave"
                name="key"
                autoComplete="off"
                value={key}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-4">
              <button className="form-control btn btn-outline-success">
                <FontAwesomeIcon icon={faGears}></FontAwesomeIcon> Generar JSON
              </button>
            </div>
          </div>
        </form>

        {json && (
          <>
            <br />
            <div>Preview del JSON generado</div>
            <br />
            <div>
                <code>
                 {JSON.stringify(json, null, 2)}
                </code>
            </div>  
            <div className="mx-auto mt-3">
                <FileExport datos={json} flag={false} />
            </div>
          </>
        )}
        </div>
        
      </div>

      {/* {(json) && 
            <>
                <button onClick={handleDownloadJSON}>Descargar JSON</button>
                <button onClick={handleDownloadXML}>Descargar XML</button>
            </>
        } */}
        </div>
    </div>
      
    </>
  );
};
