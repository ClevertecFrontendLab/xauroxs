import React from 'react';
import { Layout, Grid, Card } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import classes from './footer.module.css';
import './footer.css';

const { useBreakpoint } = Grid;

const { footer, reviews, downloadsCard, cardTitles, downloads, download } = classes;

export const MainPageFooter: React.FC = () => {
    const screens = useBreakpoint();

    const footerPaddings = screens.md ? '24px 24px 42px' : '24px 16px 42px';

    return (
        <Layout.Footer
            style={{
                margin: 0,
                padding: footerPaddings,
                backgroundColor: 'transparent',
            }}
        >
            <div className={footer}>
                <p className={reviews}>Смотреть отзывы</p>
                <Card
                    className={downloadsCard}
                    headStyle={{ padding: '0px 12px' }}
                    bodyStyle={{ padding: '12px 0' }}
                    title={
                        <div className={cardTitles}>
                            <span>Скачать на телефон</span>
                            <span>Доступно в PRO-тарифе</span>
                        </div>
                    }
                >
                    <div className={downloads}>
                        <div className={download}>
                            <AndroidFilled />
                            <span>Android OS</span>
                        </div>
                        <div className={download}>
                            <AppleFilled />
                            <span>Apple iOS</span>
                        </div>
                    </div>
                </Card>
            </div>
        </Layout.Footer>
    );
};
