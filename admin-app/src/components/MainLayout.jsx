import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { SiBrandfolder,SiBloglovin } from "react-icons/si";
import { FiArrowLeftCircle,FiArrowRightCircle  } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiShoppingCart,CiUser   } from "react-icons/ci";
import {BiLogoBlogger  } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { IoIosColorFilter,IoIosNotifications } from "react-icons/io";
import { RiFileListFill } from "react-icons/ri";
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h2 className='mb-0 w-100'>
            <span className='sm-logo'>AD</span>
            <span className='lg-logo'>Dev AnhTuan</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({key})=>{
            if(key == 'signout'){

            }else{
              navigate(key) // di chuyen toi trang can toi nho key cua items
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard  className='fs-4'/>,
              label: 'DashBoard',
            },
            {
              key: 'customers',
              icon: <CiUser className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <CiShoppingCart  className='fs-4'/>,
              label: 'Catalog',
              // xổ ra các mục con
              children:[
                {
                  key: 'product',
                  icon: <CiShoppingCart  className='fs-4'/>,
                  label: 'All Product',
                },
                {
                  key: 'list-product',
                  icon: <CiShoppingCart  className='fs-4'/>,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder  className='fs-4'/>,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder  className='fs-4'/>,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <RiFileListFill  className='fs-4'/>,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <RiFileListFill  className='fs-4'/>,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <IoIosColorFilter  className='fs-4'/>,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <IoIosColorFilter  className='fs-4'/>,
                  label: 'Color List',
                },
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Orders'
            },
            {
              key: 'blogs',
              icon: <SiBloglovin className='fs-4'/>,
              label: 'Blogs',
              children:[
                {
                  key: 'blog',
                  icon: <SiBloglovin className='fs-4'/>,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <BiLogoBlogger className='fs-4'/>,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <SiBloglovin className='fs-4'/>,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <BiLogoBlogger className='fs-4'/>,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <BiLogoBlogger className='fs-4'/>,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between px-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ?<FiArrowRightCircle className='fs-5' />: <FiArrowLeftCircle className='fs-5'/>  }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex  align-items-center">
            <div className="position-relative me-3">
              <IoIosNotifications className='fs-4'/>
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div className="">
                <img 
                  style={{width:"45px", height:"45px",objectFit:"cover",borderRadius:"50%"}} 
                  src="https://img2.thuthuatphanmem.vn/uploads/2018/12/09/hinh-anh-hacker-anonymous_111114617.jpg" 
                  alt="" />
              </div>
              <div
                type="button" data-bs-toggle="dropdown" aria-expanded="false"
                >
                <h5 className='mb-0'>AnhTuan</h5>
              </div>
              <div className="dropdown-menu">
                <li>
                  <Link 
                    to="/" 
                    className='dropdown-item py-1 mb-1' 
                    style={{height:"auto",lineHeight:"20px"}}>
                      View Profile
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/" 
                    className='dropdown-item py-1 mb-1' 
                    style={{height:"auto",lineHeight:"20px"}}>
                      Sign out
                    </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* là tất cả các phần tử con */}
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;