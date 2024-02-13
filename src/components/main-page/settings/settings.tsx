import React from 'react';
import { Grid } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import classes from './settings.module.css';

const { useBreakpoint } = Grid;

const { settings, settingsIcon, settingsIconMobile, settingsText } = classes;

export const Settings: React.FC = () => {
    const screens = useBreakpoint();

    return (
        <div className={settings}>
            <div className={screens.xs ? settingsIconMobile : settingsIcon}>
                <SettingOutlined />
            </div>
            <div className={settingsText}>Настройки</div>
        </div>
    );
};
