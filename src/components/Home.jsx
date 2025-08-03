import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/explore');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* 头部导航 */}
      <Navigation />
      
      {/* 主体内容 */}
      <div className="home-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1>氧化铝数据中心</h1>
            <p>专业的氧化铝材料数据库与文献资源平台</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleExplore}>开始探索</button>
              <button className="btn-secondary" onClick={handleLearnMore}>了解更多</button>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <div className="container">
            <h2>平台特色</h2>
            <div className="features-grid">
              <div className="feature-card" onClick={() => handleCardClick('/database')}>
                <div className="feature-icon">📊</div>
                <h3>数据库</h3>
                <p>全面的氧化铝材料性质数据库，包含结构、物理、化学性质等详细信息</p>
              </div>
              <div className="feature-card" onClick={() => handleCardClick('/literature')}>
                <div className="feature-icon">📚</div>
                <h3>文献库</h3>
                <p>丰富的氧化铝相关研究文献资源，支持多维度检索和分析</p>
              </div>
              <div className="feature-card" onClick={() => handleCardClick('/decision')}>
                <div className="feature-icon">🛠️</div>
                <h3>数智工坊</h3>
                <p>专业的材料分析工具和计算模块，助力科研工作</p>
              </div>
              <div className="feature-card" onClick={() => handleCardClick('/resources')}>
                <div className="feature-icon">📖</div>
                <h3>平台教程</h3>
                <p>详细的使用指南和教程，帮助用户快速上手</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="container">
            <h2>平台数据</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">材料数据</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">文献资源</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">分析工具</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">在线服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default Home;