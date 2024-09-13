import { useParams } from 'react-router-dom';

const Breadcrumb = () => {
  const { category } = useParams(); // Get the category name from the URL
  const categoryName = category[0].toUpperCase() + category.slice(1)
  return (
    <div className="theme-breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <ul>
                <li>
                  <h2>{categoryName} News</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
