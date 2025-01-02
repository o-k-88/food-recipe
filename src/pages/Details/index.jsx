import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { use } from "react";

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorites, favoritesList } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();

        if (data?.data?.recipe) {
          setRecipeDetailsData(data.data.recipe);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="h-96 overflow-hidden rounded-xl group">
        <img
          src={recipeDetailsData?.image_url}
          className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          alt={recipeDetailsData?.title}
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{recipeDetailsData?.title}</h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList.findIndex((item) => item.id === recipeDetailsData.id) !== -1
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.ingredients?.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-cyan-700 font-medium">
                  {ingredient?.quantity} {ingredient?.unit}
                </span>
                <span className="text-2xl font-semibold text-black">{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
