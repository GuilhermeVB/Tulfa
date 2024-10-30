import Button from "../../components/button/Button";
import ShowCase from "../../components/show_case/ShowCase";

function Info() {
  return (
    <section className="info_container">
      <div className="info_titleField">
        <h2 className="info_titleField_heading">
          Digital Transformation for All
        </h2>
        <p className="info_titleField_paragraph">
          Find optimum and convenient ways to adapt to the trend-setting digital revolutions.
        </p>
      </div>
      <div className="info_display">
        <div className="info_display_selection">
          <Button content="3D Modeling" color="secondary" stylus="showcase" />
          <Button content="Augmented Reality" color="secondary" stylus="showcase" />
          <Button content="Product Imagery" color="secondary" stylus="showcase" />
          <Button content="Rich Media" color="secondary" stylus="showcase" />
          <Button content="Product Content" color="secondary" stylus="showcase" />
        </div>
        <div className="info_display_grid">
          <ShowCase
            src="./images/info/product_info_1.png"
            heading="Baby Crib - 3D Modeling / Augmented Reality"
            paragraph="The potential of augmented reality is limitless. With augmented reality, 
            give your shoppers the opportunity to feel and experience your products in their space."
          />
          <ShowCase
            src="./images/info/product_info_2.png"
            heading="Kate Spade New York & Tulfa Inc | AR/VR | InStore Immersive Activation"
            paragraph="This Summer, Tulfa and Kate Spade New York worked together to create an immersive, 
            engaging experience for their Rockefeller Centre store in New York."
          />
          <ShowCase
            src="./images/info/product_info_3.png"
            heading="HARLEY DAVIDSON HELMET - Timelapse Showreel by Tulfa Inc."
            paragraph="Our skilled 3D artists need only a few reference images to create high-quality product renders."
          />
          <ShowCase
            src="./images/info/product_info_4.png"
            heading="NIKE - AR Ready 3D Model by Tulfa Inc"
            paragraph="Augmented reality provides sellers the ability to set their products apart from the competition by offering consumers new shopping experiences."
          />
          <ShowCase
            src="./images/info/product_info_5.png"
            heading="Hardware Category - CRL Products - 3D Modeling"
            paragraph="Every day, from 6 continents across 20 industry verticals, 
            our staff delivers next generation customer experience and helps companies better connect with their customers."
          />
          <ShowCase
            src="./images/info/product_info_6.png"
            heading="Chicago Cubs Nike T-Shirt - Product Animation Showreel by Tulfa Inc."
            paragraph="Our team of 3D artists created this CGI product video to show off not one, 
            not two, but three different shirts representing our hometown baseball team, the Chicago Cubs!"
          />
        </div>
      </div>
      <Button content="Load More" color="secondary" specification="pad_x_39 mt_16" />
    </section>
  );
}

export default Info;
