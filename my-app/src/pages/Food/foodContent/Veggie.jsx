import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import './food.css'

function Veggie() {

    const [veggie, setVeggie] =useState([]);

    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () => {

    const check = localStorage.getItem('veggie');
    
    if(check){
        setVeggie(JSON.parse(check));
    }else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=$(process.env.FOOD_API_KEY)&number=9&tags=vegetarian`
            );
            const data = await api.json();
            
            localStorage.setItem("Veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes)
            console.log(data.recipe)
    }
    };

    return (
    <div> 
                <Wrapper className="veggie_card_recipe">
                    <h3>Vegetarian Picks</h3>

                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination:false,
                        drag: `free`,
                        gap: "5rem", 
                    }}
                    >
                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt="{recipe.title}" />
                            <Gradient />
                        </Card>
                        </SplideSlide>
                    );
                    })}
                    </Splide>
                </Wrapper>
    </div>
    );
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25 rem;
    border-radius: 2rem;
    overflow: hidden;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100;
        object-fit: cover;


    }

    p{
        position: absolute;
        z-index: 10;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%
        text-align: center;
        font-size: 1rem;
        display: flex;
        justify=content: center;
        align-items: center;

    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,#FFE0B2,#fcef7bc8)
`;

export default Veggie;