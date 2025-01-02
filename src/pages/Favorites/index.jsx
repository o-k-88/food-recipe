import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { RecipeItem } from "../../components/RecipeItem";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>
          <p className="lg:text-2xl text-xl text center text-gray-600 text-bold">
            Nothing is added.
          </p>
        </div>
      )}
    </div>
  );
}
