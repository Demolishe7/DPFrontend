import React from 'react';

import './css/home.css'

import man from './../../images/stairs.png'
import Layout from '../../Layout';
import img1 from './../../images/image1.png'
import img2 from './../../images/image2.png'
import img3 from './../../images/image3.png'
import back from './../../images/back.png'


const Home = () => {
    return (
        <Layout>
            <div className='home_page'>
                <div className="container">

                    <div className="ladder_block">

                        <h1>Иди к своей цели</h1>
                        
                        <img src={man} alt="" />

                    </div>

                    

                </div>

                <div className="line">
                    <div className="left_line"></div>
                    <div className="right_line"></div>
                </div>
                <div className="container">
                    <div className="features_block">
                        <div className="features_block_content">

                            <div className="features_item ">

                                <p>
                                    Создавайте проект 
                                    на любую тему
                                </p>
                                <div className="image_wrapper">
                                    <div className="image">
                                        <img className='img3' src={img3} alt="" />
                                    </div>
                                    
                                    <img src={back} alt="" className="back" />
                                </div>
                                

                            </div>

                            <div className="features_item wide">

                                
                                <div className="image_wrapper">
                                    <div className="image">
                                        <img src={img2} alt="" />
                                    </div>
                                    
                                    <img src={back} alt="" className="back" />
                                </div>

                                <p>
                                    Устанавливайте задачи<br/>
                                    Выполяняйте их и
                                    достигайте желаемого
                                </p>

                            </div>

                            <div className="features_item bottom">

                                <p>
                                    Отслеживайте результаты
                                    вашей деятельности
                                </p>

                                <div className="image_wrapper">
                                    <div className="image">
                                        <img src={img1} alt="" />
                                    </div>
                                    
                                    <img src={back} alt="" className="back" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="points_block">
                    <div className="container">
                        <div className="points_item">
                            <div className="borders line">
                                <p>Добавляйте <br/> фото</p>
                                <div className="image"></div>
                            </div>
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <div className="points_item">
                            <div className="borders line">
                                <p>Оставляйте заметки</p>
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="points_item">
                            <div className="borders ">
                                <p>Отмечайте выполнение задачи</p>
                                <div className="image"></div>
                            </div>
                        </div>
                    </div>


                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="text_block">
                        <p>Наш сайт - идеальный помощник для тех, кто стремится к успеху! С его помощью вы сможете составить идивидуальный план развития, ставить реалистичные цели и отслеживать прогресс.</p>
                        <p>Приложение предлагает множество функций,<br />
                            постановка целей и задач,<br />
                            отслеживание прогресса,<br />
                            анализ результатов,<br />
                            рекомендации по улучшению,<br />
                            поддержка сообщества единомышленников.<br />
                            Не успустите возможность сделать свою жизнь более продуктивной
                        </p>
                    </div>
                </div>

                <div className="contacts">
                </div>

            </div>
        </Layout>
        
    );
};

export default Home;