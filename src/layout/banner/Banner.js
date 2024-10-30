function Banner() {
  return (
    <section className="banner_container">
      <video className="banner_video" autoPlay muted loop>
        <source src="./videos/banner_video.mp4" type="video/mp4" />
      </video>
      <span className="banner_span">Create unrivalled shopping experiences for your consumers</span>
    </section>
  );
}

export default Banner;
