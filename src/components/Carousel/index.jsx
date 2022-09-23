import React, { useState } from "react";

function Carousel({ apiList, selectedOption }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // List of APIs in the selected category
  let selectedApiList = apiList.filter(
    (api) => api.Category === selectedOption
  );

  // Function to calculate the previous slide
  function prevSlide() {
    setCurrentSlide(
      currentSlide === 0 ? selectedApiList.length - 1 : currentSlide - 1
    );
  }

  // Function to calculate the next slide
  function nextSlide() {
    setCurrentSlide(
      currentSlide === selectedApiList.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <section>
      {selectedApiList.map((api, idx) => (
        <div
          key={`api-${idx}`}
          className={idx === currentSlide ? "slide active-slide" : "slide"}
        >
          {/* Slide content */}
          <div className="slide-content">

            {/* Arrows */}
            <div className="arrow-box left-arrow-box" onClick={prevSlide}>
              <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
            </div>
            <div className="arrow-box right-arrow-box" onClick={nextSlide}>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </div>

            {/* Slide fields */}
            <h3>{api.API}</h3>
            <p>{api.Description}</p>
            <p>{api.Auth ? `Auth: ${api.Auth}` : null}</p>
            <p>Cors: {api.Cors}</p>
            <p>{api.HTTPS ? `HTTPS: ${api.HTTPS}` : null}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(`${api.Link}`, "_blank");
              }}
            >
              Lien
            </button>

          </div>
        </div>
      ))}
    </section>
  );
}

export default Carousel;
