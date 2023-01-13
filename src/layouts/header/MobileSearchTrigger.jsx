import { Fragment } from "react";

const MobileSearchTrigger = ({ active, close }) => {
  // let domNode = useClickOutside(() => {
  //   close();
  // });
  return (
    <Fragment>
      <div id="mobile-search-block" className={active ? "is-visible" : "___"}>
        <form
          action="#"
          id="mobile-search-form"
          // ref={domNode}
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input
            type="text"
            className="search-input"
            name="mobile-search"
            placeholder="Enter your search here..."
          />
          <button className="search-button">
            <svg className="crumina-icon">
              <use xlinkHref="#search-icon" />
            </svg>
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default MobileSearchTrigger;
