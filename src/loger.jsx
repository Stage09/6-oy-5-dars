import React, { useEffect } from "react";
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Rendered: ${WrappedComponent.name}`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}; export default withLogger;
