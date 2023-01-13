const ButtonHeader = ({ name }) => {
    return (
        <div className="collection-box">
            <a
                className="btn btn-normal btn-dark create-collection"
                href="26-upload-artwork"
            >
                {name}
            </a>

        </div>
    )
}
export default ButtonHeader;