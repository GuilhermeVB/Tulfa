import Frame from "../../components/frame/Frame";

function CaseStudies() {
  return (
    <section className="caseStudies_container">
      <h2 className="caseStudies_heading">
        Case Studies
      </h2>
      <div className="caseStudies_carousel">
        <Frame section="caseStudies" source="./images/case_studies/carousel_item_1.png" alt="Carousel Product" paragraph="DIESEL - AR Ready 3D Model by Tulfa Inc."  />
        <Frame section="caseStudies" source="./images/case_studies/carousel_item_2.png" alt="Carousel Product" paragraph="Tulfa: Food, Beverages & Beauty - 360° Photography Examples"  />
        <Frame section="caseStudies" source="./images/case_studies/carousel_item_3.png" alt="Carousel Product" paragraph="CRAFTSMAN Product Animation 2020 Showreel by Tulfa Inc."  />
      </div>
    </section>
  );
}

export default CaseStudies;
