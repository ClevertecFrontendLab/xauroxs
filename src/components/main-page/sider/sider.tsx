import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardTwoTone,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';

import LogoFull from '@assets/main-page/logo-full.svg';
import LogoShort from '@assets/main-page/logo-short.svg';
import Exit from '@assets/main-page/exit.svg';

import { MenuItems } from './sider.types';

import classes from './sider.module.css';

const {
    sider,
    siderDesktop,
    siderMobile,
    logoDesktop,
    logoMobile,
    logoFull,
    logoShort,
    trigger,
    triggerDesktop,
    triggerMobile,
    icon,
    exit,
    exitDesktop,
    exitMobile,
} = classes;

import './sider.css';

const menuItems = [
    {
        key: MenuItems.Calendar,
        icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} className={icon} />,
        label: 'Календарь',
    },
    {
        key: MenuItems.Training,
        icon: <HeartTwoTone twoToneColor={['#061178', '#061178']} className={icon} />,
        label: 'Тренировки',
    },
    {
        key: MenuItems.Achievements,
        icon: <TrophyTwoTone twoToneColor={['#061178', '#061178']} className={icon} />,
        label: 'Достижения',
    },
    {
        key: MenuItems.Profile,
        icon: <IdcardTwoTone twoToneColor={['#061178', 'white']} className={icon} />,
        label: 'Профиль',
    },
];

export const MainPageSider: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menuItem, setMenuItem] = useState<MenuItems>(MenuItems.Calendar);

    const toggleIsCollapsed = () => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    };

    return (
        <>
            {/* Desktop & Tablet Sider */}
            <Layout.Sider
                width={208}
                theme='light'
                trigger={null}
                collapsible
                collapsedWidth={64}
                collapsed={isCollapsed}
                className={`${sider} ${siderDesktop}`}
            >
                <div className={`${logoDesktop} ${isCollapsed ? logoShort : logoFull}`}>
                    <img src={isCollapsed ? LogoShort : LogoFull} alt='cleverfit' />
                </div>

                <Menu
                    theme='light'
                    items={menuItems}
                    selectedKeys={[menuItem]}
                    onClick={({ key }) => setMenuItem(key as MenuItems)}
                />

                <div
                    className={`${trigger} ${triggerDesktop}`}
                    onClick={toggleIsCollapsed}
                    data-test-id='sider-switch'
                >
                    {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>

                <div className={`${exit} ${exitDesktop}`}>
                    <img src={Exit} />
                    {!isCollapsed && <span>Выход</span>}
                </div>
            </Layout.Sider>

            {/* Mobile Sider */}
            <Layout.Sider
                width={106}
                theme='light'
                trigger={null}
                collapsible
                collapsedWidth={0}
                collapsed={isCollapsed}
                className={`${sider} ${siderMobile}`}
                style={{ position: 'fixed' }}
            >
                <div className={`${logoMobile}`}>
                    <img src={LogoFull} alt='cleverfit' />
                </div>

                <Menu
                    theme='light'
                    selectedKeys={[menuItem]}
                    items={menuItems.map(({ key, label }) => ({ key, label }))}
                    onClick={({ key }) => setMenuItem(key as MenuItems)}
                    className='menuMobile'
                />

                <div
                    className={`${trigger} ${triggerMobile}`}
                    onClick={toggleIsCollapsed}
                    data-test-id='sider-switch-mobile'
                >
                    {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>

                <div className={`${exit} ${exitMobile}`}>{!isCollapsed && <span>Выход</span>}</div>
            </Layout.Sider>
        </>
    );
};
