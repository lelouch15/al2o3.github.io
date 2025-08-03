import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Resources.css';

const Resources = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const tutorials = [
    {
      id: 1,
      title: '平台快速入门指南',
      description: '了解氧化铝数据中心的基本功能和使用方法',
      category: '入门教程',
      duration: '10分钟',
      difficulty: '初级',
      icon: '🚀',
      content: '本教程将带您快速了解平台的主要功能模块...'
    },
    {
      id: 2,
      title: '数据库检索技巧',
      description: '掌握高效的材料数据检索和筛选方法',
      category: '数据库使用',
      duration: '15分钟',
      difficulty: '中级',
      icon: '🔍',
      content: '学习如何使用高级搜索功能快速找到所需的材料数据...'
    },
    {
      id: 3,
      title: '文献库高级搜索',
      description: '学习使用文献库的高级搜索功能和筛选条件',
      category: '文献库使用',
      duration: '12分钟',
      difficulty: '中级',
      icon: '📚',
      content: '深入了解文献库的搜索语法和高级筛选功能...'
    },
    {
      id: 4,
      title: '数智工坊使用指南',
      description: '了解各种分析工具的使用方法和应用场景',
      category: '工具使用',
      duration: '20分钟',
      difficulty: '高级',
      icon: '🛠️',
      content: '详细介绍平台提供的各种分析工具及其使用方法...'
    },
    {
      id: 5,
      title: '数据导出与分析',
      description: '学习如何导出数据并进行进一步分析',
      category: '数据分析',
      duration: '18分钟',
      difficulty: '高级',
      icon: '📊',
      content: '掌握数据导出格式和后续分析处理方法...'
    },
    {
      id: 6,
      title: '常见问题解答',
      description: '平台使用过程中的常见问题和解决方案',
      category: '问题解答',
      duration: '5分钟',
      difficulty: '初级',
      icon: '❓',
      content: '收集整理了用户在使用过程中遇到的常见问题...'
    }
  ];

  const categories = ['全部', '入门教程', '数据库使用', '文献库使用', '工具使用', '数据分析', '问题解答'];

  const filteredTutorials = selectedCategory === '全部' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '初级': return '#27ae60';
      case '中级': return '#f39c12';
      case '高级': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="resources-container">
      {/* 头部导航 */}
      <Navigation />
      
      <div className="resources-content">
        <div className="resources-header">
          <h1>平台教程</h1>
          <p>详细的使用指南和教程，帮助您快速掌握平台功能</p>
        </div>

        <div className="tutorial-controls">
          <div className="category-filter">
            <label>教程分类：</label>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="tutorial-stats">
          <div className="stat-item">
            <span className="stat-number">{filteredTutorials.length}</span>
            <span className="stat-label">教程总数</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{tutorials.filter(t => t.difficulty === '初级').length}</span>
            <span className="stat-label">初级教程</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{tutorials.filter(t => t.difficulty === '中级').length}</span>
            <span className="stat-label">中级教程</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{tutorials.filter(t => t.difficulty === '高级').length}</span>
            <span className="stat-label">高级教程</span>
          </div>
        </div>

        <div className="tutorials-grid">
          {filteredTutorials.map(tutorial => (
            <div
              key={tutorial.id}
              className="tutorial-card"
              onClick={() => setSelectedTutorial(tutorial)}
            >
              <div className="tutorial-header">
                <div className="tutorial-icon">{tutorial.icon}</div>
                <div
                  className="tutorial-difficulty"
                  style={{ backgroundColor: getDifficultyColor(tutorial.difficulty) }}
                >
                  {tutorial.difficulty}
                </div>
              </div>
              <div className="tutorial-title">{tutorial.title}</div>
              <div className="tutorial-category">{tutorial.category}</div>
              <div className="tutorial-description">{tutorial.description}</div>
              <div className="tutorial-meta">
                <span className="tutorial-duration">⏱️ {tutorial.duration}</span>
              </div>
              <div className="tutorial-actions">
                <button className="btn-start">开始学习</button>
                <button className="btn-preview">预览</button>
              </div>
            </div>
          ))}
        </div>

        {/* 教程详情模态框 */}
        {selectedTutorial && (
          <div className="tutorial-modal" onClick={() => setSelectedTutorial(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedTutorial.title}</h2>
                <button className="close-btn" onClick={() => setSelectedTutorial(null)}>×</button>
              </div>
              <div className="modal-body">
                <div className="tutorial-detail-info">
                  <div className="info-item">
                    <label>分类：</label>
                    <span>{selectedTutorial.category}</span>
                  </div>
                  <div className="info-item">
                    <label>难度：</label>
                    <span style={{ color: getDifficultyColor(selectedTutorial.difficulty) }}>
                      {selectedTutorial.difficulty}
                    </span>
                  </div>
                  <div className="info-item">
                    <label>时长：</label>
                    <span>{selectedTutorial.duration}</span>
                  </div>
                  <div className="info-item">
                    <label>描述：</label>
                    <span>{selectedTutorial.description}</span>
                  </div>
                </div>
                <div className="tutorial-content">
                  <h3>教程内容</h3>
                  <p>{selectedTutorial.content}</p>
                </div>
                <div className="tutorial-actions-modal">
                  <button className="btn-primary">开始学习</button>
                  <button className="btn-secondary">下载PDF</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 帮助区域 */}
        <div className="help-section">
          <div className="container">
            <h2>需要帮助？</h2>
            <div className="help-grid">
              <div className="help-card">
                <div className="help-icon">📧</div>
                <h3>联系支持</h3>
                <p>遇到问题？发送邮件给我们的技术支持团队</p>
                <button className="help-btn">发送邮件</button>
              </div>
              <div className="help-card">
                <div className="help-icon">💬</div>
                <h3>在线客服</h3>
                <p>实时在线客服，快速解答您的疑问</p>
                <button className="help-btn">开始对话</button>
              </div>
              <div className="help-card">
                <div className="help-icon">📖</div>
                <h3>用户手册</h3>
                <p>下载完整的用户手册和操作指南</p>
                <button className="help-btn">下载手册</button>
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

export default Resources;