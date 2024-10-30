function Frame({ source, alt, section, paragraph }) {
    return (
        <div className={`${section}_frame_container`}>
            <img className={`${section}_frame_card`} src={source} alt={alt} />
            <figcaption className={`${section}_frame_description`}>
                {paragraph}
            </figcaption>
        </div>
    );
}

export default Frame;
