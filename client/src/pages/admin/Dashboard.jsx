import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard">

        <div className="welcome-box">
          <div>
            <h2>Welcome Back, Admin 👋</h2>
            <p>Manage your products, categories and orders from one place.</p>
          </div>

          <button className="btn btn-primary">
            View Store
          </button>
        </div>

        <div className="row g-4 mt-2">

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <div>
                <h6>Total Categories</h6>
                <h2>12</h2>
              </div>

              <i className="bi bi-grid-fill"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <div>
                <h6>Total Products</h6>
                <h2>45</h2>
              </div>

              <i className="bi bi-box-seam-fill"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <div>
                <h6>Total Orders</h6>
                <h2>25</h2>
              </div>

              <i className="bi bi-cart-check-fill"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card">
              <div>
                <h6>Total Users</h6>
                <h2>120</h2>
              </div>

              <i className="bi bi-people-fill"></i>
            </div>
          </div>

        </div>

        <div className="row mt-4">

          <div className="col-lg-8">

            <div className="activity-box">

              <h5>Recent Activity</h5>

              <table className="table mt-3">

                <thead>

                  <tr>
                    <th>User</th>
                    <th>Activity</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Rahul</td>
                    <td>Placed New Order</td>
                    <td>
                      <span className="badge bg-success">
                        Success
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Priya</td>
                    <td>Added Product</td>
                    <td>
                      <span className="badge bg-primary">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Amit</td>
                    <td>Updated Category</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="profile-box">

              <img
                src="https://i.pravatar.cc/120"
                alt=""
              />

              <h4>Admin</h4>

              <p>ShopNest Administrator</p>

              <button className="btn btn-outline-primary w-100">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;