import { useState } from "react";
import Coverd from "../../Components/Coverd";
import img from '../../assets/home/banner.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const gategories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const {category} = useParams()
    const initialIndex = gategories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    console.log(category);
    return (
        <div>
            <Helmet>
            <title>bistro | order</title>
            </Helmet>
            <Coverd img={img} title={'Our Shope'} text={'Would you like to try a dish?'}></Coverd>
            <div className="container mx-auto py-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>

                    <TabPanel>
                        <OrderTabs foodItem={salads}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs foodItem={pizza}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs foodItem={soups}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs foodItem={dessert}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs foodItem={drinks}></OrderTabs>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;