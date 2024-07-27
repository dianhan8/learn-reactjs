import "./app.css";
import "normalize.css";

export default function App() {
  return (
    <div>
      <div className="header">
        <div>
          <h3 className="header-title poppins-semibold">TODO LIST</h3>
        </div>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h1 className="content-header__title">Activity</h1>

          <div>
            <button className="btn btn-primary btn-rounded">
              <span className="material-symbols-outlined">add</span>
              Tambah
            </button>
          </div>
        </div>

        <div>
          <div className="empty-state">
            <img src="/ilustration/activity-empty-state.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
