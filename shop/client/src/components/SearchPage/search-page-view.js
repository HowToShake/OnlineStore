import React from "react";

export const SearchPage = ({ props, mapDispatchToProps }) => {
  console.log(props);

  const renderSearchedItems = () => {
    return (
      <>
        {props.searchedItems.map((el, index) => {
          return <h1 key={index}>{el.name}</h1>;
        })}
      </>
    );
  };

  return (
    <div>
      <h1>SEARCH</h1>
      {renderSearchedItems()}
    </div>
  );
};
