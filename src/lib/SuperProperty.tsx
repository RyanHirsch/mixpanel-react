import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const SuperProperty: React.FunctionComponent<SuperPropertyProps> = React.memo(
  ({ name, value }) => {
    useEffect(() => {
      mixpanel.register({ [name]: value });
    }, [name, value]);
    return null;
  }
);

export default SuperProperty;
export interface SuperPropertyProps {
  name: string;
  value: string | number | boolean;
}
