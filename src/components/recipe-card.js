import CustomImage from "./custom_image";
export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage src={recipe.image} pt="65%"></CustomImage>
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg}></img>
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a className="view-btn" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
}
