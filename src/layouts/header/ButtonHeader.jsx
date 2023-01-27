import Link from "next/link";

const ButtonHeader = ({ name, link }) => {
    return (
        <div className="collection-box">
            <Link
                className="btn btn-normal btn-dark create-collection"
                to={link}
                href={link}>
                {name}
            </Link>

        </div>
    )
}
export default ButtonHeader;