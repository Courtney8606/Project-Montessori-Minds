import React, { useEffect } from "react";

const SocialMediaPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn.curator.io/published/b19c9bf0-be23-4a5d-940b-9feddbea9e03.js";

    const parent = document.getElementsByTagName("script")[0];
    parent.parentNode.insertBefore(script, parent);

    // Cleanup script when the component is unmounted
    return () => {
      parent.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div id="curator-feed-default-feed-layout">
      <a
        href="https://curator.io"
        target="_blank"
        rel="noopener noreferrer"
        className="crt-logo crt-tag"
      >
        Powered by Curator.io
      </a>
    </div>
  );
};

export default SocialMediaPage;
