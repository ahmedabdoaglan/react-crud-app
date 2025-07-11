import React from "react";

const Loading = ({ loading, error, children }) => {
  // Safer check for element type using optional chaining
  const elementType =
    children?.type?.render?.displayName ||
    children?.type?.displayName ||
    children?.type?.name;

  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>
                <br />
                {error}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? (
          <p>loading please wait...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };

  return renderHandler();
};

export default Loading;
