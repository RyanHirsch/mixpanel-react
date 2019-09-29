import React from "react";

import TrackEvent from "./TrackEvent";

const PageView: React.FunctionComponent<PageViewProps> = ({
  name,
  props = {}
}) => {
  return (
    <TrackEvent
      name="Page View"
      props={{
        "Page Name": name,
        "Page URL": window.location.href.replace(/\/$/, ""),
        ...props
      }}
    />
  );
};

export default PageView;
export interface PageViewProps {
  name: string;
  props?: {
    [key: string]: any;
  };
}
