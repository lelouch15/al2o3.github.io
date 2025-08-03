import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Decision.css';

const Decision = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      id: 1,
      name: '材料性质预测',
      description: '基于机器学习算法预测氧化铝材料的物理化学性质',
      category: '预测分析',
      icon: '🔮',
      status: '可用'
    },
    {
      id: 2,
      name: '晶体结构分析',
      description: '分析和可视化氧化铝的晶体结构特征',
      category: '结构分析',
      icon: '💎',
      status: '开发中'
    },
    {
      id: 3,
      name: '热力学计算',
      description: '计算氧化铝在不同条件下的热力学参数',
      category: '计算工具',
      icon: '🌡️',
      status: '可用'
    },
    {
      id: 4,
      name: '相图绘制',
      description: '绘制氧化铝相关的相图和相变关系',
      category: '可视化',
      icon: '📊',
      status: '可用'
    },
    {
      id: 5,
      name: '文献智能推荐',
      description: '基于研究内容智能推荐相关文献资源',
      category: '智能推荐',
      icon: '🤖',
      status: '开发中'
    },
    {
      id: 6,
      name: '数据对比分析',
      description: '对比分析不同氧化铝材料的性质差异',
      category: '数据分析',
      icon: '📈',
      status: '可用'
    }
  ];

  const categories = ['全部', '预测分析', '结构分析', '计算工具', '可视化', '智能推荐', '数据分析'];
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredTools = selectedCategory === '全部' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case '可用': return '#27ae60';
      case '开发中': return '#f39c12';
      case '维护中': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="decision-container">
      {/* 头部导航 */}
      <Navigation />
      
      <div className="decision-header">
        <h1>数智工坊</h1>
        <p>专业的氧化铝材料分析工具集合</p>
      </div>

      <div className="tools-controls">
        <div className="category-filter">
          <label>工具分类：</label>
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

      <div className="tools-stats">
        <div className="stat-item">
          <span className="stat-number">{filteredTools.length}</span>
          <span className="stat-label">可用工具</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{tools.filter(t => t.status === '可用').length}</span>
          <span className="stat-label">已发布</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{tools.filter(t => t.status === '开发中').length}</span>
          <span className="stat-label">开发中</span>
        </div>
      </div>

      <div className="tools-grid">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className="tool-card"
            onClick={() => setSelectedTool(tool)}
          >
            <div className="tool-header">
              <div className="tool-icon">{tool.icon}</div>
              <div
                className="tool-status"
                style={{ backgroundColor: getStatusColor(tool.status) }}
                title={tool.status}
              >
                {tool.status}
              </div>
            </div>
            <div className="tool-name">{tool.name}</div>
            <div className="tool-category">{tool.category}</div>
            <div className="tool-description">{tool.description}</div>
            <div className="tool-actions">
              <button className="btn-use">使用工具</button>
              <button className="btn-info">详细信息</button>
            </div>
          </div>
        ))}
      </div>

      {/* 工具详情模态框 */}
      {selectedTool && (
        <div className="tool-modal" onClick={() => setSelectedTool(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedTool.name}</h2>
              <button className="close-btn" onClick={() => setSelectedTool(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="tool-detail-info">
                <div className="info-item">
                  <label>工具类别：</label>
                  <span>{selectedTool.category}</span>
                </div>
                <div className="info-item">
                  <label>状态：</label>
                  <span style={{ color: getStatusColor(selectedTool.status) }}>
                    {selectedTool.status}
                  </span>
                </div>
                <div className="info-item">
                  <label>描述：</label>
                  <span>{selectedTool.description}</span>
                </div>
              </div>
              <div className="tool-actions-modal">
                <button className="btn-primary">立即使用</button>
                <button className="btn-secondary">查看文档</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default Decision;