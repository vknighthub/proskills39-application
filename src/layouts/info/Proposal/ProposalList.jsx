import { getPagination, pagination } from '@/utils/util';
import { format } from 'currency-formatter';
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import NiceSelect from './../../../components/styles/NiceSelect';
import { FetchProposal } from '@/data/proposal';

const ProposalList = ({ dataproposal, challengeId }) => {


  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);

  const { data, total, refetch } = FetchProposal(
    challengeId,
    {
      page: active,
      limit: 12,
    },
    dataproposal
  )

  useEffect(() => {
    pagination(".news-item", 12, active);
    setstate(getPagination(total, 12));
  }, [active, data, total]);

  useEffect(() => {
    refetch()
  }, [active, data, total])

  return (
    <>
      <div className="page-title-section">
        <h2>
          <span className="gradient-text"> Proposal</span> collection
        </h2>
      </div>

      <div className="filterable-bar">
        <form id="creators-filter-form" onSubmit={(e) => onSubmit(e)}>
          <div className="filter-options">
            <NiceSelect
              arr={[
                { name: "Order by Proposal Name (A-Z)", value: "" },
              ]}
              ChangeFilterData={(name, value) => onChnage(name, value)}
              name={"order"} />
            <NiceSelect
              arr={[
                { name: "All voted", value: "all" },
                { name: "Owner voted", value: "owner" },
              ]}
              ChangeFilterData={(name, value) => onChnage(name, value)}
              name={"votetype"}
            />
            <NiceSelect
              arr={[
                { name: "0 vote", value: "0" },
                { name: "Over 100 vote", value: "100" },
                { name: "Over 500 vote", value: "500" },
              ]}
              ChangeFilterData={(name, value) => onChnage(name, value)}
              name={"votecount"} />


            <NiceSelect
              arr={[
                { name: "Proposal Budget 0$", value: "0" },
                { name: "Proposal Budget over $10,000.00", value: "10000" },
                { name: "Proposal Budget over $50,000.00", value: "50000" },
              ]}
              ChangeFilterData={(name, value) => onChnage(name, value)}
              name={"budget"} />
          </div>
          <div className="filter-button">
            <button className="btn btn-normal btn-dark">Filter</button>
          </div>
        </form>
      </div>

      <div className="related-section container">
        <div className="section-title-wrapper">
        </div>
        <div className="featured-box grid-3-columns">
          {data && data.listProposal && data.listProposal.map((proposal) => (
            <div className="featured-item item-proposal" key={proposal.proposalId}>
              <Link href={{
                pathname: '/proposals/[proposalId]',
                query: { proposalId: proposal.proposalId },
              }}>
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">{proposal.voteCount}</span>
                    </div>

                    <div className="featured-item-info">
                      <div className="title">
                        {proposal.proposalName}
                      </div>
                      <p style={{ minHeight: "120px" }}>{parse(proposal.descriptionDetail)}</p>
                      <div className="item-meta">
                        <span className="avatar box-26" >
                          <Link href={`/user-profile/${proposal.proposerInfor.username}`}>
                            <Image src={proposal.proposerInfor.avatar} alt="" width={30} height={30} />
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        {proposal.contributors.map((contributor) => (
                          <span className="avatar box-26" key={contributor.id}>
                            <Link href="#">
                              <Image src={contributor.avatar} alt="" width={30} height={30} />
                            </Link>
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </span>
                        ))}
                      </div>
                      <p className="text-success">{proposal.summaryProposal && parse(proposal.summaryProposal)}</p>
                      <span className="gradient-text">Fund:</span> <i>{data.challengeName}</i>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
                    <div className="featured-item-pricebox">
                      <div className="price-caption">Current Budget</div>
                      <div className="price"> {format(proposal.bugetProposal, { code: 'USD' })}</div>
                    </div>
                    <div className="social-share-box">
                      <div className="social-caption">View proposal in idealscale</div>
                      <div className="share-icons">

                        <Link target="_blank" href={`https://cardano.ideascale.com/c/idea/${proposal.proposalId}`}>
                          <svg className="crumina-icon" style={{ width: '18px', height: '18px' }}>
                            <use xlinkHref="#bell-icon" />
                          </svg>
                        </Link>

                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div >

        <div className="pagination-section flex-center">
          <ul className="pagination-list">
            <li className="page-item page-nav-prev">
              <a
                href="#"
                className="muted3-color"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(active === 1 ? 1 : active - 1);
                }}
              >
                Prev
              </a>
            </li>
            {state &&
              state.map((s, i) => (
                <li key={i} className={`page-item ${active === s ? "active" : ""}`}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(s);
                    }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            <li className="page-item page-nav-next">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(active === state.length ? state.length : active + 1);
                }}
                className="page-item page-nav-next"
              >
                Next
              </a>
            </li>
          </ul>
        </div>

      </div >
    </>

  );
};
export default ProposalList;
