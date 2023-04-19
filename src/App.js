import Footer from "./Component/Footer";
import SocialEslider from "./Component/SocialEslider";
import Avtar from "./Component/Avtar";
import FrontVideo from "./Component/FrontVideo";
import HomeHeader from "./Component/HomeHeader";
import SocialMedia from "./Component/SocialMedia";
import Work from "./Component/Work";
import gsap from "gsap";
import { useEffect } from "react";
function App() {
  // cursor start
  useEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          }
        })
      }
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    })

    cursorScale.forEach(link => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    })
  }, [])
  return (
    <>
      <div class="cursor"></div>

      {/* <main class="c-main"> */}

      <HomeHeader />
      <FrontVideo />
      <SocialMedia />
      <Work />
      <Avtar />
      <SocialEslider />
      <Footer />
      {/* </main> */}


    </>
  );
}

export default App;
