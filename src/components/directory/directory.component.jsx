import "./directory.styles.scss";
import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { sleectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: sleectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
