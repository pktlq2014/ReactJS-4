import { Component } from "react";

class ProductItemManager extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 1</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">
                        Còn hàng
                    </span>
                </td>
                <td>
                    <button type="button" class="btn btn-success">Sửa</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItemManager;
