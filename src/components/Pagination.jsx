import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({makeHttpRequestWithPage,total,paginas,current,pagina}) {
  let renderPageNumbers;

  const pageNumber = [];
  if (total !== null) {
    for (let i = 1; i <= paginas; i++) {
      pageNumber.push(i);
    }
    renderPageNumbers = pageNumber.map((number) => {
      let classes = current === number ? "border-r-2 h-7 w-8 border-white text-center bg-sky-500 text-white hover:bg-sky-400 text-sm font-bold" 
      : "border-r-2 h-7 w-8 text-gray-500 border-white text-center bg-sky-100 hover:text-white hover:bg-sky-400 focus:outline-none disabled:opacity-25 disabled text-sm";

      if (
        number === 1 ||
        number === total ||
        (number >= current - 2 && number <= current + 2)
      ) {
        return (
          <button
            key={number}
            className={classes}
            onClick={() => makeHttpRequestWithPage(number, pagina,"nombres","ASC")}
          >
            {number}
          </button>
        );
      } else {
        return null;
      }
    });
}
return (
    <ul className="flex flex-wrap items-center mb-6 text-gray-700 dark:text-white text-sm">
      <li 
        className="w-7 h-7 pt-1 text-center bg-sky-500 text-white hover:bg-sky-400 rounded-l-md mr-1"
        onClick={() => makeHttpRequestWithPage(1, pagina)}>        
        <FontAwesomeIcon  icon={faAngleDoubleLeft} />        
      </li>

      <li
        className="w-7 h-7 pt-1 text-center bg-sky-500 text-white hover:bg-sky-400 rounded-l-md mr-1"
        onClick={() =>makeHttpRequestWithPage(current === 1 ? 1 : current - 1, pagina)}>        
          <FontAwesomeIcon icon={faAngleLeft} />        
      </li>
      {renderPageNumbers}

      <li        
          className="ml-2 w-7 h-7 pt-1 text-center bg-sky-500 text-white hover:bg-sky-400 rounded-r-md mr-1"
          onClick={() => makeHttpRequestWithPage(current === paginas ? current : current + 1, pagina)}>
        <FontAwesomeIcon icon={faAngleRight} />        
      </li>

      <li
        className="w-7 h-7 pt-1 text-center bg-sky-500 text-white hover:bg-sky-400 rounded-r-md mr-1"
        onClick={() => makeHttpRequestWithPage(paginas, pagina)}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />        
      </li>
      <li className="ml-8 text-sm">
        página {current} de {paginas}{" "}
      </li>
      <li className="ml-8">
        <b className="text-sm"
        >{total === 0 ? " Sin resultados" : "Total :" + total + " items"}</b>
      </li>
    </ul>

    )}

export default Pagination
