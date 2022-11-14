import React from "react";
import Card from "./card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/index";
import { contentCards, link } from "./Cards.module.css";
const Cards = () => {
  const { recipes } = useSelector((state) => state);

  return (
    <div>
      <Pagination />
      <div className={contentCards}>
        {recipes.map((recipe) => {
          return (
            <Link key={recipe.id} className={link} to={`detail/${recipe.id}`}>
              <div>
                <Card
                  image={recipe.image}
                  name={recipe.name}
                  diets={recipe.diets.join(", ")}
                  healthScore={recipe.healthScore}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
