import React from "react";
import Layout from "../../layouts/Layout";

const AboutPage = () => {
  return (
    <div className="AboutPage-wrap">
      <div className="AboutPage-top">
        <div className="AboutPage-main">
          <div className="AboutPage-main-gogishop"></div>
          <div className="AboutPage-main-butcher"></div>
          <div className="AboutPage-main-band"></div>
          <div className="AboutPage-main-shops"></div>
          <div className="AboutPage-main-event"></div>
          <div className="AboutPage-main-community"></div>
          <Layout>
            <h1>AboutPage</h1>
          </Layout>
          <div className="AboutPage-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
