import Frame from "../../components/frame/Frame";

function Immersive() {

  return (
    <div className="immersive_animation_container">
      <section className="immersive_container">
        <h2 className="immersive_heading">
          Tulfa AR creates immersive and engaging eCommerce experiences
        </h2>
        <div className="immersive_productdisplays">
          <Frame section="immersive" source="./images/immersive/frame_figure_1.png" alt="AR Ready 3D Mode" />
          <Frame section="immersive" source="./images/immersive/frame_figure_2.png" alt="3D Modeling & AR" />
          <Frame section="immersive" source="./images/immersive/frame_figure_3.png" alt="Product Animation" />
          <Frame section="immersive" source="./images/immersive/frame_figure_4.png" alt="Product Animation" />
          <Frame section="immersive" source="./images/immersive/frame_figure_5.png" alt="3D Modeling & AR" />
        </div>
      </section>
    </div>
  );
}

export default Immersive;
