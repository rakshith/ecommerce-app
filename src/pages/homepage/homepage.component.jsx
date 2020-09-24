import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homePage">
    <div className="homepage">
      {/* <div className="directory-menu">
        <MenuItem title="HATS" subtitle="SHOP NOW" />

        <MenuItem title="JACKETS" subtitle="SHOP NOW" />

        <MenuItem title="SNEAKERS" subtitle="SHOP NOW" />

        <MenuItem title="WOMENS" subtitle="SHOP NOW" />

        <MenuItem title="MENS" subtitle="SHOP NOW" />
      </div> */}

      <Directory />
    </div>
  </div>
);

export default HomePage;
