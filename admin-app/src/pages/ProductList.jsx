import React from 'react';
import { Table } from 'antd';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        status: `London, Park Lane no. ${i}`,
    });
}
const ProductList = () => {
    return (
        <div>
            <h3 className='mb-4 title'>
                Products List
            </h3>
            <div className="">
                <Table  columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default ProductList;
