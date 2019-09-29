import React from "react";
import mixpanel from "mixpanel-browser";

interface TrackLinkProps {
  href: string;
  maxWait?: number;
  trackName?: string;
  trackProps?: { [key: string]: number | boolean | string | Date | any[] };
}

function waitFor(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const TrackLink: React.FunctionComponent<TrackLinkProps> = ({
  href,
  maxWait = 100,
  trackName = "Link Clicked",
  trackProps = {},
  ...props
}) => {
  return (
    <a
      href={href}
      onClick={ev => {
        const { button, metaKey, ctrlKey } = ev;
        const sameTab = button === 0 && !(metaKey || ctrlKey);
        const trackRequest = new Promise(resolve =>
          mixpanel.track(
            trackName,
            {
              "Link URL": href,
              "Page URL": window.location.href.replace(/\/$/, ""),
              "Same Tab": sameTab,
              ...trackProps
            },
            resolve
          )
        );
        if (sameTab) {
          ev.preventDefault();
          Promise.race([waitFor(maxWait), trackRequest]).then(
            () => (window.location.href = href)
          );
        }
      }}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default TrackLink;
