import { useEffect, useState } from "react";
import { ScrollTop as Scroll  , Container, BtnTxt} from "./ScrollTop.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTop() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <Container>
      {showScrollBtn && (
        <Scroll onClick={goToTop}><FontAwesomeIcon className="arrow" icon={faAngleUp} size="lg" style={{color: "#701818",}} /><BtnTxt>Scroll to Top</BtnTxt></Scroll>
      )}
    </Container>
  )
}

export default ScrollTop