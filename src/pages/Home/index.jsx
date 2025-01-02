import { useContext } from "react";
import { GlobalContext } from "../../context";
import { RecipeItem } from "../../components/RecipeItem";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>
          <p className="lg:text-2xl text-xl text center text-gray-600 text-bold">
            Nothing to show. Please search something.
          </p>
        </div>
      )}
    </div>
  );
}
