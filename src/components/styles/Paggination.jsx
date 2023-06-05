const Paggination = ({ setActive, active, length, sort, className }) => {
  return (
    <div
      className={`pagination-section ${className ? className : "flex-right"}`}
    >
      {length ? (
        <ul className="pagination-list">
          <li className="page-item page-nav-prev">
            <a
              href="#"
              onClick={(e) => {
                setActive(active === 0 ? 0 : active - 1);
                e.preventDefault();
              }}
            >
              Prev
            </a>
          </li>
          {Array(Math.ceil(length / sort))
            .fill("p")
            .map((m, i) => (
              <li
                key={i}
                className={`page-item ${active === i ? "active" : ""}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    setActive(i);
                    e.preventDefault();
                  }}
                >
                  {i < 9 ? `0${i + 1}` : i + 1}
                </a>
              </li>
            ))}

          <li className="page-item page-nav-next">
            <a
              href="#"
              onClick={(e) => {
                setActive((active + 1) * sort < length ? active + 1 : active);
                e.preventDefault();
              }}
              className="page-item page-nav-next"
            >
              Next
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Paggination;
