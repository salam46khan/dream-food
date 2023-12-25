import SectionItem from "../../Components/SectionItem";
import useMenu from "../../hooks/useMenu";
import CategoriMenu from "../../Components/CategoriMenu";

const PopularMenu = () => {
    // const [popular, setPopular] = useState([]);
    const [menu] = useMenu()
    const popular = menu.filter(menu => menu.category === 'popular')

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <SectionItem header={"FROM OUR MENU"} subHeader={"---Check it out---"}></SectionItem>
                <CategoriMenu item={popular}></CategoriMenu>
            </div>
        </div>
    );
};

export default PopularMenu;