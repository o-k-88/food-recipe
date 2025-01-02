import React from "react";
import { Link } from "react-router";

export const RecipeItem = ({ recipe }) => {
  return (
    <div key={recipe?.id} className="w-96 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img src={recipe?.image_url} alt={recipe?.title} className="w-full h-60 object-cover" />
      <div className="p-4 flex flex-col flex-grow gap-4">
        <h2 className="text-xl font-semibold">{recipe?.title}</h2>
        <p className="text-gray-600">{recipe?.publisher}</p>
        <div className="mt-auto">
          <Link
            to={`/recipe-item/${recipe?.id}`}
            className="bg-red-500 text-white p-2 rounded-md block text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
