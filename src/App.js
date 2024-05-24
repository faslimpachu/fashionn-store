import React from 'react';
import Navbar from './coponents/navbar/navbar';
import Hero from './coponents/hero/Hero';
import BrandLogo from './coponents/BrandLogo/BrandLogo';
import NewArrilval from './coponents/NewArrivals/NewArrilval';
import PayDay from './coponents/PaydaySale/PayDay';
import Youngers from './coponents/yougers/Youngers';
import DownloadApp from './coponents/DownloadApp/DownloadApp';
import JoinShoping from './coponents/JoinShoping/JoinShoping';
import Footer from './coponents/Footer/Footer';




function App() {
  return (
   <>
       <Navbar />
       <Hero />
       <BrandLogo />
       <NewArrilval />
       <PayDay />
       <Youngers />
       <DownloadApp />
       <JoinShoping />
       <Footer />
     
     
   </>
  );
}

export default App;
