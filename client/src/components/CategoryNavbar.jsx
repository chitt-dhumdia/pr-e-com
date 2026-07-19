import "./CategoryNavbar.css";

const CategoryNavbar = () => {
  return (
    <div className="category-navbar">
      <div className="container">

        <div className="row text-center">

          <div className="col">
            <div className="category-item">
              <i className="bi bi-stars category-icon"></i>
              <p>For You</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-bag category-icon"></i>
              <p>Fashion</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-phone category-icon"></i>
              <p>Mobiles</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-brush category-icon"></i>
              <p>Beauty</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-laptop category-icon"></i>
              <p>Electronics</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-house-door category-icon"></i>
              <p>Home</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-tv category-icon"></i>
              <p>Appliances</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-controller category-icon"></i>
              <p>Toys</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-cup-hot category-icon"></i>
              <p>Food</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-bicycle category-icon"></i>
              <p>Bikes</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-dribbble category-icon"></i>
              <p>Sports</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-book category-icon"></i>
              <p>Books</p>
            </div>
          </div>

          <div className="col">
            <div className="category-item">
              <i className="bi bi-lamp category-icon"></i>
              <p>Furniture</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CategoryNavbar;