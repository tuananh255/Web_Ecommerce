import React from 'react';
import { Button, Table } from 'antd';
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
const CategoryList = () => {
    return (
        <div>
            <h3 className='mb-4 title'>
                Products Category
            </h3>
            <div className="">
                <Table  columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default CategoryList;
