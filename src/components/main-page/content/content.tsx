import React from 'react';
import { Layout, Grid, Typography, Card } from 'antd';
import { CalendarTwoTone, HeartTwoTone, IdcardTwoTone } from '@ant-design/icons';

import classes from './content.module.css';
import './content.css';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const { possibilities, motivation, cards, cardTitle, cardDescription } = classes;

const cardItems = [
    {
        title: 'Расписать тренировки',
        icon: <HeartTwoTone twoToneColor={['#2f54eb', '#2f54eb']} />,
        text: 'Тренировки',
    },
    {
        title: 'Назначить календарь',
        icon: <CalendarTwoTone twoToneColor={['#2f54eb', '#2f54eb']} />,
        text: 'Календарь',
    },
    {
        title: 'Заполнить профиль',
        icon: <IdcardTwoTone twoToneColor={['#2f54eb', 'white']} />,
        text: 'Профиль',
    },
];

export const MainPageContent: React.FC = () => {
    const screens = useBreakpoint();

    const contentPaddings = screens.md ? '24px 24px 0px' : '24px 16px 0px';

    return (
        <Layout.Content style={{ padding: contentPaddings }}>
            <div className={possibilities}>
                <p>С CleverFit ты сможешь:</p>

                <ul>
                    <li>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </li>
                    <li>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                    </li>
                    <li>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;
                    </li>
                    <li>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </li>
                </ul>
            </div>

            <div className={motivation}>
                <Title level={4} style={{ marginBottom: 0, fontWeight: '600' }}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </div>

            <div className={cards}>
                {cardItems.map(({ title, icon, text }) => (
                    <Card
                        key={title}
                        title={title}
                        className={cardTitle}
                        headStyle={{ padding: 0 }}
                        bodyStyle={{ padding: '12px 0' }}
                    >
                        <div className={cardDescription}>
                            {icon} {text}
                        </div>
                    </Card>
                ))}
            </div>
        </Layout.Content>
    );
};
