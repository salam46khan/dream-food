import { Helmet } from "react-helmet-async";
import Coverd from "../../Components/Coverd";
import img from '../../assets/home/featured.jpg'
import img2 from '../../assets/home/chef-service.jpg';
import SectionItem from "../../Components/SectionItem";
import CategoriMenu from "../../Components/CategoriMenu";
import useMenu from "../../hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>bistro | menu</title>
            </Helmet>
            <Coverd img={img} title={'OUR MENU'} text={'Would you like to try a dish?'}></Coverd>
            <SectionItem header={"TODAY'S OFFER"} subHeader={"---Don't miss---"}></SectionItem>
            {/* offered -------------- */}
            <div className="container mx-auto">
                <CategoriMenu item={offered} title={'offerd'}></CategoriMenu>
                
            </div>
            {/* dessert --------- */}
            <div className="py-10">
                <Coverd img={img2} title={'DESSERTS'} text={'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Coverd>
                <div className="container mx-auto pt-10">
                    <CategoriMenu item={dessert} title={'dessert'}></CategoriMenu>
                    
                </div>

            </div>

            {/* pizza ----------------- */}

            <div className="py-10">
                <Coverd img={img2} title={'PIZZA'} text={'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Coverd>
                <div className="container mx-auto pt-10">
                    <CategoriMenu item={pizza} title={'pizza'} ></CategoriMenu>
                    
                </div>

            </div>

            {/* salads ----------------- */}
            <div className="py-10">
                <Coverd img={img2} title={'SALADs'} text={'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Coverd>
                <div className="container mx-auto pt-10">
                    <CategoriMenu title={'salad'} item={salads}></CategoriMenu>
                    
                </div>

            </div>

            {/* soups -------------- */}
            <div className="py-10">
                <Coverd img={img2} title={'SOUPS'} text={'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Coverd>
                <div className="container mx-auto pt-10">
                    <CategoriMenu title={'soup'} item={soups}></CategoriMenu>
                    
                </div>

            </div>
        </div>
    );
};

export default Menu;