import Feature from "../../components/feature_grid/Feature";

function Solutions() {
  return (
    <section className="solutions_container">
      <div className="solutions_titleField">
        <h2 className="solutions_titleField_heading">
          Discover our Solutions
        </h2>
        <p className="solutions_titleField_subtitle">
          Scale your product content with the optimal solutions for e-commerce
        </p>
      </div>
      <div className="solutions_featureGrid">
        <Feature
          source="./images/solutions/feature_figure_1.png"
          alt="Metaverse character"
          iconUrl="./images/solutions/icon_1.png"
          heading="Metaverse Content Production"
        />
        <Feature
          source="./images/solutions/feature_figure_2.png"
          alt="Shoe in the Amazon catalog"
          iconUrl="./images/solutions/icon_2.png"
          heading="Enhanced Brand Content"
        />
        <Feature
          source="./images/solutions/feature_figure_3.png"
          alt="Product information screen"
          iconUrl="./images/solutions/icon_3.png"
          heading="Catalog Management"
        />
        <Feature
          source="./images/solutions/feature_figure_4.png"
          alt="Sofa"
          iconUrl="./images/solutions/icon_4.png"
          heading="Product Imagery"
        />
        <Feature
          source="./images/solutions/feature_figure_5.png"
          alt="Headphone"
          iconUrl="./images/solutions/icon_5.png"
          heading="AR Viewer"
        />
        <Feature
          source="./images/solutions/feature_figure_6.png"
          alt="product evaluation details"
          iconUrl="./images/solutions/icon_6.png"
          heading="Omnichannel Commerce"
        />
      </div>
    </section>
  );
}

export default Solutions;
