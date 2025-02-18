//This component include the side nav and accept a props which is the content layout on the right sideof all the pages
'use client';

import { Layout, Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import '../cardList.scss';
const {Sider } = Layout;

export default function MainLayout ({ children }) {
      const router = useRouter();
      const pathname = usePathname(); 
      const items = [
        { key: '/', label: 'Home' },
        { key: '/about', label: 'About' }
      ];
    return(
        <Layout className= 'home-page__container'>
            <Sider collapsible>
                <Menu theme="dark" mode="inline"
                selectedKeys={[pathname]}
                items={items.map(item => ({
                ...item,
                onClick: () => router.push(item.key)
                }))}>
                </Menu>
            </Sider>
            {children}
      </Layout>
    )
}
