import useAuth from "@/components/auth/use-auth";
import { useSubmitDeal } from "@/data/service";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from 'src/components/icon'

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ServiceDetailTab = ({ data, seller }) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const activeTabNav = (value) => (value === activeTab ? "active" : ""),
        activeContent = (value) => (value === activeTab ? "active" : "");

    const handleClickScroll = () => {
        const element = document.getElementById('compare-package');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [textFieldValue, setTextFieldValue] = useState('');

    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
    };

    const { mutate: SubmitDeal } = useSubmitDeal()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ProcessOffer = (serviceid) => {
        const data = {
            serviceid: serviceid,
            description: textFieldValue
        }
        SubmitDeal(data)
        handleClose()
    }

    const { isAuthorized } = useAuth()

    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true)
    }, [render])

    return (
        <>
            <div className="tabs-block ">
                <ul className="tabs-list ">
                    <li
                        className={activeTabNav("tab1")}
                        onClick={() => setActiveTab("tab1")}
                    >
                        <a>Basic</a>
                    </li>
                    <li
                        className={activeTabNav("tab2")}
                        onClick={() => setActiveTab("tab2")}
                    >
                        <a>Standard</a>
                    </li>
                    <li
                        className={activeTabNav("tab3")}
                        onClick={() => setActiveTab("tab3")}
                    >
                        <a>Premium</a>
                    </li>
                </ul>

                {data.map((tabservice, index) => (
                    <>
                        <div id={`tab${index + 1}`} className={`tab ${activeContent(`tab${index + 1}`)}`} key={tabservice.id}>
                            <div className="tab-content">
                                <div className="placed-bid">
                                    <div className="bid-placer">
                                        <div className="bid-info">
                                            <div className="bid-title">
                                                <span className="gradient-text">
                                                    {tabservice.name.toUpperCase()} DOFOLLOW
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bid-box">
                                        <div className="crypto-value">v2p {tabservice.price}</div>
                                    </div>
                                </div>
                                <div className="bid-title">{tabservice.promise}</div>

                                <div className="mt-5">
                                    <div className="bid-placer">
                                        <div className="avatar box-42">
                                            <svg className="crumina-icon bullet-icon">
                                                <use xlinkHref="#clock-icon" />
                                            </svg>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title">
                                                <span className="gradient-text">
                                                    {tabservice.numberofdaydelivery} Days Delivery
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="place-bid row">
                                        {isAuthorized && render &&
                                            <>
                                                <div className="related-section">
                                                    <div className="section-title-wrapper">
                                                        <button
                                                            onClick={() => handleOpen()}
                                                            className="btn btn-wide btn-dark">{`Continue with (v2p ${tabservice.price})`}
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="related-section" style={{ marginLeft: 30 }}>
                                                    <div className="section-title-wrapper">
                                                        <Link href={`/inbox/${seller?.username}`} className="btn btn-wide btn-dark">Contact to Seller </Link>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <Link href="#compare-package" onClick={() => handleClickScroll()} className="green " >Compare package</Link>
                                </div>
                            </div>
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: 5 }}>
                                    Write something
                                </Typography>
                                <TextField
                                    id='outlined-basic'
                                    label='Write something...'
                                    fullWidth
                                    multiline
                                    rows={5}
                                    onChange={handleTextFieldChange}
                                />
                                <Button onClick={() => ProcessOffer(tabservice.id)} variant='contained' sx={{ marginTop: 5 }} endIcon={<Icon icon='mdi:send' />}>
                                    Deal
                                </Button>
                            </Box>
                        </Modal>
                    </>
                ))}

            </div>





        </>
    );
};

export default ServiceDetailTab;
