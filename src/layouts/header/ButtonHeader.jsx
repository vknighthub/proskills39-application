import Link from "next/link";

const ButtonHeader = ({ name, link }) => {
    return (
        <>
            {name &&
                <div className="collection-box">
                    <Link
                        className="btn btn-normal btn-dark create-collection"
                        href={`/${link}`}
                    >
                        {name}
                    </Link>
                </div>
            }
        </>
    )
}
export default ButtonHeader;