import CustomImage from "./custom_image";
export default function HeroSection() {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  return (
    <div className="section">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Welcome to FoodiesHub, your culinary haven for delicious recipes from
          around the world. Whether you're in the mood for spicy Thai dishes,
          comforting Italian meals, or vibrant Mexican flavors, we have
          something for everyone.
        </p>
        <p className="info">
          We believe cooking should be enjoyable, which is why we offer a wide
          collection of recipes with step-by-step instructions—all for free! So
          why wait? Dive in and start exploring new flavors that will delight
          your taste buds and inspire your inner chef. Join our community of
          food enthusiasts today!
        </p>
       
        <button className="btn">explore now</button>
      </div>
      <div className="col gallery">
        {images.map((image, index) => (
          <CustomImage key={index} src={image} pt={"90%"}></CustomImage>
        ))}
      </div>
    </div>
  );
}
