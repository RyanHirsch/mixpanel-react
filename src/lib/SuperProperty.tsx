import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const SuperProperty: React.FunctionComponent<SuperPropertyProps> = React.memo(
  ({ name, value }: SuperPropertyProps) => {
    useEffect(() => {
      mixpanel.register({ [name]: value });
    }, [name, value]);
    return null;
  }
);

export default SuperProperty;
export interface SuperPropertyProps {
  name: string;
  value: number | boolean | string | Date | any[];
}
