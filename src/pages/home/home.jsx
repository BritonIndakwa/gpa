import React, { useState,useEffect, useContext } from 'react'
import './home.css'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Header from '../../components/hearder/hearder';

export const Home = () => {
//   const images = menu_list.map(item => item.menu_image);
  const [showLogin, setShowLogin] = useState(false)

  const [category, setCategory] = useState("All");
//   const { user,homeProducts, fetchRandomProducts } = useContext(StoreContext);
//   console.log("User from context:", user);

//    useEffect(() => {
//     fetchRandomProducts(); // ✅ Load 20 products on homepage
//   }, []);

  // ✅ Filter items by category
//   const filteredItems = category === "All"
//     ? homeProducts
//     : homeProducts.filter(item => item.category === category);


  return (
    <div >
      <Navbar  />
      <Header/>

      {/* <Header /> */}
      {/* <Verify/> */}
      {/* <Carousel images={images}/> */}
      {/* <div className='home-welcome'>
       

        {user && (
          <h2 className="welcome-text">
            Welcome, <span className="user-name">{user.name}</span> 🎉
          </h2>
        )}
      </div> */}
      <Carousel/>

      {/* <ExploreMenu category={category} setCategory={setCategory} />
      <ItemDisplay category={category} items={homeProducts} />
      <AppDownload /> */}
      <Footer />
      {/* <ChatWidget/> */}

    </div>
  )
}
