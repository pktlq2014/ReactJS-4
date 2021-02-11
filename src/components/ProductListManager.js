import { Component } from "react";
import ProductItemManaget from './ProductItemManager';
class ProductListManager extends Component {
    render() {
        return (
            <main id="mainContainer" className="container">
                <button type="button" class="btn btn-info">Thêm sản phẩm</button>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ProductItemManaget />
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductListManager;
