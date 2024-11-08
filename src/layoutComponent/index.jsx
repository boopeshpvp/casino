import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  FireOutlined,
  FormOutlined,
  GiftOutlined,
  GlobalOutlined,
  HistoryOutlined,
  MessageOutlined,
  ShoppingOutlined,
  StarOutlined,
  ThunderboltOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { Layout, Menu } from 'antd';
import CustomButton from '../Components/customButton';
import AppHeader from '../appHeader';
import AppContent from '../appContent';
import AppFooter from '../appFooter';

const { Header, Content, Sider, Footer } = Layout;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'none',
  scrollbarGutter: 'stable',
};
const items = [
  {
    key: '1',
    icon: <StarOutlined />,
    label: 'Favourites',
  },
  {
    key: '2',
    icon: <HistoryOutlined />,
    label: 'Recent',
  },
  {
    key: '3',
    icon: <ClockCircleOutlined />,
    label: 'Challenges',
  },
  {
    key: '4',
    icon: <ShoppingOutlined />,
    label: 'My Bets',
  },

  // Divider
  { type: 'divider' },

  // Games Section
  {
    key: 'sub1',
    icon: <AppstoreOutlined />,
    label: 'Games',
    children: [
      {
        key: '5',
        icon: <FireOutlined />,
        label: 'Stake Originals',
      },
      {
        key: '6',
        icon: <StarOutlined />,
        label: 'Stake Exclusives',
      },
      {
        key: '7',
        icon: <AppstoreOutlined />,
        label: 'Slots',
      },
      {
        key: '8',
        icon: <AppstoreOutlined />,
        label: 'Live Casino',
      },
      {
        key: '9',
        icon: <AppstoreOutlined />,
        label: 'Game Shows',
      },
      {
        key: '10',
        icon: <AppstoreOutlined />,
        label: 'New Releases',
      },
      {
        key: '11',
        icon: <AppstoreOutlined />,
        label: 'Stake Poker',
      },
      {
        key: '12',
        icon: <AppstoreOutlined />,
        label: 'Bonus Buy',
      },
      {
        key: '13',
        icon: <ThunderboltOutlined />,
        label: 'Enhanced RTP',
      },
      {
        key: '14',
        icon: <AppstoreOutlined />,
        label: 'Table Games',
      },
      {
        key: '15',
        icon: <AppstoreOutlined />,
        label: 'Blackjack',
      },
      {
        key: '16',
        icon: <AppstoreOutlined />,
        label: 'Baccarat',
      },
      {
        key: '17',
        icon: <AppstoreOutlined />,
        label: 'Roulette',
      },
    ],
  },

  // Divider
  { type: 'divider' },

  // Other Sections
  {
    key: '18',
    icon: <AppstoreOutlined />,
    label: 'Providers',
  },
  {
    key: '19',
    icon: <GiftOutlined />,
    label: 'Promotions',
  },
  {
    key: '20',
    icon: <TrophyOutlined />,
    label: 'Affiliate',
  },
  {
    key: '21',
    icon: <TrophyOutlined />,
    label: 'VIP Club',
  },
  {
    key: '22',
    icon: <FormOutlined />,
    label: 'Blog',
  },
  {
    key: '23',
    icon: <MessageOutlined />,
    label: 'Forum',
  },

  // Divider
  { type: 'divider' },

  // Support Section
  {
    key: '24',
    icon: <ThunderboltOutlined />,
    label: 'Sponsorships',
  },
  {
    key: '25',
    icon: <CustomerServiceOutlined />,
    label: 'Responsible Gambling',
  },
  {
    key: '26',
    icon: <CustomerServiceOutlined />,
    label: 'Live Support',
  },
  {
    key: '27',
    icon: <GlobalOutlined />,
    label: 'Language: English',
  },
]
const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        style={siderStyle}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250} 
        collapsedWidth={80} 
        className="SideBar sider-bg-color"
      >
        <div className="demo-logo-vertical" />
        <div className='siderHeaderStyle'>
        <div className='d-flex' 
        style={{ padding: '15px 0px', gap: 25, marginLeft: 10 }}
        >
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 20,
              height: 20,
              backgroundColor: 'transparent',
              border: 'none',
              marginTop: 8,
              cursor: 'pointer'
            }}
          >
            <GiHamburgerMenu color='#fff' size={20} />
          </button>
          {!collapsed && (
            <div>
              <CustomButton backgroundImage={"https://mediumrare.imgix.net/casino-poker-cards-green-en.jpg?auto=format&w=78"}>
                CASINO
              </CustomButton>
              <CustomButton
                backgroundImage={"https://mediumrare.imgix.net/sports-balls-en.jpg?auto=format&w=78"}
                activeImage="https://mediumrare.imgix.net/sports-balls-orange-en.jpg?auto=format&w=78"
                style={{marginLeft:10}}
              >
                SPORT
              </CustomButton>
            </div>
          )}
        </div>
        </div>

        {collapsed && (
          <>
            <div className='p-10 ml-10'>
              <CustomButton backgroundImage={"https://mediumrare.imgix.net/sports-balls-en.jpg?auto=format&w=78"} style={{ padding: 23 }}>
                {''}
              </CustomButton>
            </div>
            <div className='p-10 ml-10'>
              <CustomButton
                backgroundImage={"https://mediumrare.imgix.net/casino-poker-cards-green-en.jpg?auto=format&w=78"}
                activeImage="https://mediumrare.imgix.net/sports-balls-orange-en.jpg?auto=format&w=78"
                style={{ padding: 23 }}
              >
                {''}
              </CustomButton>
            </div>
          </>
        )}

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} className="sider-bg-color" />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: 'margin-left 0.2s ease',
        }}
      >
        <Header className='headerStyle'>
          <AppHeader />
        </Header>
        <Content
          style={{
            padding: collapsed ?'15px 100px':'15px 50px 15px 100px',
            textAlign: 'center',
            background: '#1a2c38',
            transition: 'margin-left 0.2s ease', // Smooth transition for margin
          }}
        >
          <AppContent />
        </Content>
        <Footer className='footerStyle'><AppFooter /></Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;