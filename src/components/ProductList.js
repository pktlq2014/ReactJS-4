import ProductItem from './ProductItem';
function ProductList() {
  return (
    <section class="section">
      <h1 class="section-heading">Danh Sách Sản Phẩm</h1>
      <div class="row">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>

  );
}

export default ProductList;
