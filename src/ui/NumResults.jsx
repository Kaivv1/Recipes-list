const NumResults = ({ recipes }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        fontWeight: "bold",
      }}
    >
      <p>{`Results: ${recipes.length} found`}</p>
    </div>
  );
};

export default NumResults;
