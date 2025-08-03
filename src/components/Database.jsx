import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './Database.css';

const Database = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState('all');
  const [materials, setMaterials] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  // 模拟材料数据
  const mockMaterials = [
    {
      id: 1,
      name: 'α-氧化铝',
      formula: 'Al₂O₃',
      category: '陶瓷材料',
      density: '3.95 g/cm³',
      meltingPoint: '2072°C',
      hardness: '9 (莫氏硬度)',
      thermalConductivity: '30 W/m·K',
      applications: ['耐火材料', '研磨材料', '催化剂载体'],
      description: '最稳定的氧化铝晶型，具有优异的化学稳定性和机械性能'
    },
    {
      id: 2,
      name: 'γ-氧化铝',
      formula: 'Al₂O₃',
      category: '催化材料',
      density: '3.6 g/cm³',
      meltingPoint: '转变温度 1200°C',
      hardness: '6-7 (莫氏硬度)',
      thermalConductivity: '8-12 W/m·K',
      applications: ['催化剂', '吸附剂', '干燥剂'],
      description: '具有高比表面积的过渡氧化铝，广泛用于催化领域'
    },
    {
      id: 3,
      name: '氢氧化铝',
      formula: 'Al(OH)₃',
      category: '阻燃材料',
      density: '2.42 g/cm³',
      meltingPoint: '分解温度 180-200°C',
      hardness: '2.5-3.5 (莫氏硬度)',
      thermalConductivity: '1.5 W/m·K',
      applications: ['阻燃剂', '填料', '氧化铝前驱体'],
      description: '重要的氧化铝前驱体，具有良好的阻燃性能'
    },
    {
      id: 4,
      name: '拟薄水铝石',
      formula: 'AlOOH',
      category: '前驱体材料',
      density: '3.01 g/cm³',
      meltingPoint: '分解温度 450-600°C',
      hardness: '3-4 (莫氏硬度)',
      thermalConductivity: '2-5 W/m·K',
      applications: ['催化剂载体', '吸附剂', '氧化铝制备'],
      description: '重要的氧化铝前驱体，可制备高比表面积氧化铝'
    }
  ];

  const categories = ['all', '陶瓷材料', '催化材料', '阻燃材料', '前驱体材料'];
  const properties = ['all', '密度', '熔点', '硬度', '热导率'];

  useEffect(() => {
    // 模拟数据加载
    setTimeout(() => {
      setMaterials(mockMaterials);
      setFilteredMaterials(mockMaterials);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // 过滤材料
    let filtered = materials;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(material => material.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(material => 
        material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMaterials(filtered);
  }, [searchTerm, selectedCategory, materials]);

  const handleMaterialClick = (materialId) => {
    // 跳转到材料详情页
    navigate(`/materials/${materialId}`);
  };

  return (
    <div className="database">
      {/* 头部导航 */}
      <Navigation />
      
      {/* 主体内容 */}
      <div className="database-container">
        <div className="database-header">
          <h1>材料数据库</h1>
          <p>全面的氧化铝材料性质数据库</p>
        </div>

      {/* 搜索和过滤区域 */}
      <div className="search-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="搜索材料名称、分子式或描述..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="filters">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? '所有类别' : category}
              </option>
            ))}
          </select>
          
          <select 
            value={selectedProperty} 
            onChange={(e) => setSelectedProperty(e.target.value)}
            className="filter-select"
          >
            {properties.map(property => (
              <option key={property} value={property}>
                {property === 'all' ? '所有属性' : property}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 统计信息 */}
      <div className="database-stats">
        <div className="stat-item">
          <span className="stat-number">{materials.length}</span>
          <span className="stat-label">材料总数</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{filteredMaterials.length}</span>
          <span className="stat-label">搜索结果</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{categories.length - 1}</span>
          <span className="stat-label">材料类别</span>
        </div>
      </div>

      {/* 材料列表 */}
      <div className="materials-grid">
        {loading ? (
          <div className="loading">加载中...</div>
        ) : filteredMaterials.length > 0 ? (
          filteredMaterials.map(material => (
            <div 
              key={material.id} 
              className="material-card"
              onClick={() => handleMaterialClick(material.id)}
            >
              <div className="material-header">
                <h3 className="material-name">{material.name}</h3>
                <span className="material-formula">{material.formula}</span>
              </div>
              
              <div className="material-category">{material.category}</div>
              
              <div className="material-properties">
                <div className="property">
                  <span className="property-label">密度:</span>
                  <span className="property-value">{material.density}</span>
                </div>
                <div className="property">
                  <span className="property-label">熔点:</span>
                  <span className="property-value">{material.meltingPoint}</span>
                </div>
                <div className="property">
                  <span className="property-label">硬度:</span>
                  <span className="property-value">{material.hardness}</span>
                </div>
              </div>
              
              <div className="material-applications">
                <span className="applications-label">应用:</span>
                <div className="applications-list">
                  {material.applications.slice(0, 2).map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  ))}
                  {material.applications.length > 2 && (
                    <span className="more-applications">+{material.applications.length - 2}</span>
                  )}
                </div>
              </div>
              
              <p className="material-description">{material.description}</p>
              
              <div className="material-actions">
                <button className="view-details-btn">查看详情</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>未找到匹配的材料</p>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>清除筛选</button>
          </div>
        )}
      </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default Database;