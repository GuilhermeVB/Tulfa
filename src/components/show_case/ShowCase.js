import Frame from "../frame/Frame";

function ShowCase({ src, heading, paragraph }) {
    return (
        <div className="showcase_container">
            <Frame section="showcase" source={src} alt="Product preview" />
            <h3 className="showcase_heading">
                {heading}
            </h3>
            <p className="showcase_paragraph">
                {paragraph}
            </p>
        </div>
    );
}

export default ShowCase;
