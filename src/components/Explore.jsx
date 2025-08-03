import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore">
      {/* 头部导航 */}
      <Navigation />
      
      {/* 主体内容 */}
      <div className="explore-container">
        <div className="explore-header">
          <h1>开始探索</h1>
          <p>欢迎来到氧化铝数据中心探索页面</p>
        </div>
        
        <div className="explore-content">
          <div className="content-placeholder">
            <h2>探索内容</h2>
            <p>这里将展示探索相关的内容...</p>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default Explore;