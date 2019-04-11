import React from 'react';

import 'antd/dist/antd.css';
import {Breadcrumb, Table, Badge, Menu, Dropdown, Icon,} from 'antd';
import { chownSync } from 'fs';

class List extends React.Component {
    render() {
  const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '名称', dataIndex: 'name', key: 'name' },
  { title: '单价', dataIndex: 'pri', key: 'pri' },
  { title: '数量', dataIndex: 'num', key: 'num' },
  { title: '总计', dataIndex: 'tog', key: 'tog' },
  { title: '是否发货', dataIndex: 'send', key: 'send' },
  {
    title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
  },
];
// const togal = columns.dataIndex.pri * columns.dataIndex.num
console.log(columns)
const data = [
  {
    key: 1, name: '红酒',pri:'100',num:'10',send:"否",tog:'1000',
  },
   {
    key: 2, name: '红酒',pri:'100',num:'10',send:"否",tog:'1000',
  },
  {
    key: 3, name: '红酒',pri:'100',num:'10',send:"否",tog:'1000',
  },
  
  
];
       
        return <div>
            <Breadcrumb>
                <Breadcrumb.Item>订单管理</Breadcrumb.Item>
            </Breadcrumb>
        

<Table
    columns={columns}
    dataSource={data}
  />,

            
            

        </div>
    }
}
export default List