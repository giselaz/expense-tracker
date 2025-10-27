import Card from "../ui/CustomCard";

function Category() {
  return (
    <div className="category-container  align-items-center mt-4">
      <div className="category-header mb-4">
        <h2 style={{ textAlign: "center" }}>Categories</h2>
        <button className="btn btn-primary mt-2">Add Category</button>
      </div>
      <div className="category-list d-flex flex-wrap justify-content-center gap-3 mt-4">
        <Card  title="Groceries and dining" />
        <Card  title="Groceries and dining" />
        <Card  title="Groceries and dining" />
      </div>
    </div>
  );
}

export default Category;
