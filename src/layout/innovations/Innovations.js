import Highlights from "../../components/highlights/Highlights";

function Innovations() {

  return (
    <section className="innovations_container">
      <Highlights
        order={"1"}
        type="Metaverse Content Production"
        heading="InStore Immersive Activation"
        paragraph="Tulfa’s AR feature was tailor-made to suit both the venue and the audience. 
        With the easy-to-operate touchscreen scan interface, we brought live-action bees to Kate Spade customers!"
        buttonText="Learn more about ar"
        videoUrl="./videos/innovations_visual_element_1.mp4"
      />
      <Highlights
        order={"2"}
        type="3D Model Creation"
        heading="High-quality Product Renders"
        paragraph="The future of digital experiences is here. Tulfa's 3D Lab provides you with an instant metaverse
        strategy by creating 3D models and other assets to help you sell your products faster. We create and deploy 3D models that work across platforms."
        buttonText="3d assets creation"
        videoUrl="./videos/innovations_visual_element_2.mp4"
      />
      <Highlights
        order={"3"}
        type="3D Model Creation"
        heading="3D Product Configuration"
        paragraph="It enables for product customization in terms of colors, materials, textures, sizes, pricing, and other factors. 
        3D Product Configuration generates stunning real-time 3D product visualizations."
        buttonText="3D product configuration"
        imageUrl="./images/innovations/innovations_visual_element_3.png"
      />
      <Highlights
        order={"4"}
        type="Product Content"
        heading="Enhanced Content that Converts"
        paragraph="We enhance your product listings and create digital experiences that transform your digital shelf. 
        Check out our new video for a quick highlight of how we can help your eCommerce business succeed!"
        buttonText="Learn more about product content"
        videoUrl="./videos/innovations_visual_element_4.mp4"
      />
    </section>
  );
}

export default Innovations;
