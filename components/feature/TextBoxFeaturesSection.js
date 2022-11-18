/* eslint-disable @next/next/no-img-element */
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const TextBoxFeaturesSection = ({ slice }) => {
  // console.log(slice);
  return (
    <>
      <div className="container section-padding" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="wrap-text">
            <RichText render={slice?.primary?.heading} />
            <RichText render={slice?.primary?.description1} />
          </div>
          <div className="row px-4">
            {slice?.items?.map((item, index) => (
              <TextBoxItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrap-text {
          max-width: 860px;
          margin: 0 auto;
          padding-left: 75px;
          padding-right: 75px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

const TextBoxItem = ({ data }) => {
  // console.log(data);
  const { title1, details } = data;
  return (
    <div className="col-12 col-md-6 mt-5 mx-auto">
      <div className="box bg-inverse h-100">
        <div className="meta mb-10"></div>
        <div className="post-title">
          <RichText render={title1} linkResolver={linkResolver} />
        </div>
        <div className="post-content">
          <RichText render={details} linkResolver={linkResolver} />
        </div>
      </div>
      <style jsx>{`
        .bg-inverse {
          background-color: #1b1b1b;
        }
        .box {
          padding: 40px 40px 20px;
        }
        .h-100 {
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default TextBoxFeaturesSection;
