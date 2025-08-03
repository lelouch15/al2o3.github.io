import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* 头部导航 */}
      <Navigation />
      
      {/* 主体内容 */}
      <div className="about-container">
        <div className="about-header">
          <h1>了解更多</h1>
          <p>深入了解氧化铝数据中心的更多信息</p>
        </div>
        
        <div className="about-content">
          <div className="content-placeholder">
            <h2>关于我们</h2>
            <p>这里将展示关于氧化铝数据中心的详细信息...</p>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default About;