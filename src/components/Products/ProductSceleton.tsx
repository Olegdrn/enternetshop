import React from "react";
import ContentLoader from "react-content-loader";


  const ProductSceleton = ()=> (
  <ContentLoader
    className="product_elements" 
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >

    <rect x="0" y="0" rx="0" ry="0" width="350" height="420" /> 
    <rect x="0" y="440" rx="0" ry="0" width="350" height="20" /> 
    <rect x="0" y="480" rx="0" ry="0" width="350" height="20" />

  </ContentLoader>
  )

export default ProductSceleton