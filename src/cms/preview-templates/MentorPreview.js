import React from "react";
import PropTypes from "prop-types";
import { MentorTemplate } from "../../templates/mentor";

const MentorPreview = ({ entry, widgetFor }) => (
  <MentorTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

MentorPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MentorPreview;
