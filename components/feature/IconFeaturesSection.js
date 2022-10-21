/* eslint-disable @next/next/no-img-element */
const IconFeatures = ({ slice }) => {
  const { heading, subheading } = slice?.primary;

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="dorothea-heading-meta">
              {subheading?.[0]?.text}
            </span>
            <h2 className="dorothea-heading">{heading?.[0]?.text}</h2>
          </div>
        </div>
        <div className="row">
          {slice?.items?.map((item, index) => (
            <FeatureItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ data }) => {
  const { icon, title1, description1 } = data;

  return (
    <div className="col-md-6 mb-30">
      <div className="box">
        <div className="icon">
          <img className="w-100" src={icon?.url} alt={icon?.alt} />
        </div>
        <h5>{title1?.[0]?.text}</h5>
        <p>{description1?.[0]?.text}</p>
      </div>
      <style jsx>{`
        .icon {
          width: 66px;
          height: 66px;
          margin: 10px;
        }
        .box {
          background-color: #101010;
          padding: 20px 40px;
        }
        p {
          line-height: 1.3em;
        }
      `}</style>
    </div>
  );
};

export default IconFeatures;
