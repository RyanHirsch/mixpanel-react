import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const TrackEvent: React.FunctionComponent<TrackEventProps> = React.memo(
  ({ name, props = {} }) => {
    useEffect(() => {
      mixpanel.track(name, props);
    }, [name, props]);
    return null;
  }
);

export default TrackEvent;
export interface TrackEventProps {
  name: string;
  props?: {
    [key: string]: any;
  };
}
