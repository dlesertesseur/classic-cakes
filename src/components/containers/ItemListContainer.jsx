import React from "react";

const ItemListContainer = (props) => {
  const styles = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: '2rem',
      fontFamily: 'Helvetica',
      alignItems: 'center',
      height: '100%'
  };
  return (
    <div style={styles}>
      <h1>{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
