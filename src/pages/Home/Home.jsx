import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import CheckOut from "./CheckOut";
import Testimonial from "./Testimonial";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>bistro | home</title>
            </Helmet>
            <Banner></Banner>
            <p>this is home</p>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CheckOut></CheckOut>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;