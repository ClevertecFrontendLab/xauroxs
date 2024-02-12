import React from 'react';
import { Layout } from 'antd';

import { MainPageSider } from '@components/main-page/sider/sider';
import { MainPageHeader } from '@components/main-page/header/header';
import { MainPageContent } from '@components/main-page/content/content';
import { MainPageFooter } from '@components/main-page/footer/footer';

export const MainPage: React.FC = () => {
    return (
        <Layout>
            <MainPageSider />
            <Layout>
                <MainPageHeader />
                <MainPageContent />
                <MainPageFooter />
            </Layout>
        </Layout>
    );
};
