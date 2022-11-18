import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const SecondaryHeroSection = ({ slice }) => {
  // console.log(slice);
  const { description1, heading, background_image } = slice.primary;
  return (
    <div>
      <div className="dorothea-hero js-fullheight">
        <div className="flexslider js-fullheight">
          <div
            className="bg-fixed"
            style={{
              backgroundImage: `url(${background_image.url})`,
              backgroundSize: "cover",
            }}
          >
            <div className="overlay "></div>
            <div className="container">
              <div className="col-md-12 js-fullheight slider-text">
                <div className="slider-text-inner">
                  <div className="mx-auto frame-inner">
                    <h1 className="title">{heading[0]?.text}</h1>
                    <Link href="/">
                      <a>
                        <h6>Home</h6>
                      </a>
                    </Link>
                    <span className="frame-1"></span>
                    <span className="frame-2"></span>
                  </div>
                  <div className="col-md-10 col-lg-8 mx-auto mt-4 text-center">
                    <RichText
                      render={description1}
                      linkResolver={linkResolver}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dorothea-hero .flexslider .slider-text {
          min-height: 400px;
          overflow: hidden;
        }
        .bg-fixed {
          background-size: cover;
          background-position: center center;
        }
        .overlay {
          width: 100%;
          height: 100%;
          top: 0;
          position: absolute;
          background: rgb(0 0 0 / 40%);
        }
        .slider-text-inner {
          padding-top: 45px !important;
        }
        @media (min-width: 767px) {
          .title {
            font-size: 35px;
          }
        }
        @media (max-width: 767px) {
          .title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondaryHeroSection;
