function Feature({ source, alt, iconUrl, heading }) {
    return (
        <div className="feature">
            <img className="feature_image" src={source} alt={alt} />
            <div className="feature_description">
                <img src={iconUrl} alt="" className="feature_description_icon" />
                <div className="feature_description_heading">
                    <h3 className="feature_description_heading_phrase">{heading}</h3>
                </div>
            </div>
        </div>
    );
}

export default Feature;
