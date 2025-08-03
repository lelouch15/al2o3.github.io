import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './LiteratureDatabase.css';

const LiteratureDatabase = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchField, setSearchField] = useState('subject');
  const [paperNum, setPaperNum] = useState(0);
  const [patentNum, setPatentNum] = useState(0);
  const [informationNum, setInformationNum] = useState(0);
  const [projectNum, setProjectNum] = useState(0);
  const [talentNum, setTalentNum] = useState(0);
  const [reportNum, setReportNum] = useState(0);
  const [bookNum, setBookNum] = useState(0);
  const [conferenceNum, setConferenceNum] = useState(0);
  const [institutionNum, setInstitutionNum] = useState(0);
  const [policiesNum, setPoliciesNum] = useState(0);

  const searchOptions = [
    { value: 'subject', label: '主题' },
    { value: 'title', label: '标题' },
    { value: 'keyword', label: '关键词' },
    { value: 'author', label: '作者' },
    { value: 'institution', label: '机构' },
    { value: 'publication', label: '出版物' },
    { value: 'abstract', label: '摘要' },
    { value: 'doi', label: 'DOI' }
  ];

  const handleSearch = () => {
    // 搜索逻辑
    console.log('搜索:', searchValue, '字段:', searchField);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // 模拟数据加载
    setPaperNum(573873);
    setPatentNum(357248);
    setInformationNum(164981);
    setProjectNum(95797);
    setTalentNum(2184);
    setReportNum(2508);
    setBookNum(296);
    setConferenceNum(278);
    setInstitutionNum(21600);
    setPoliciesNum(828);
  }, []);

  return (
    <div className="literature-database">
      {/* 头部导航 */}
      <Navigation />

      {/* 主体内容 */}
      <div className="mon_warp">
        <div className="mon_body">
          {/* 标题区域 */}
          <div className="di_world_map">
            <div className="warp_title">
              <label>氧化铝数据中心</label>
              <span>文献库</span>
            </div>
            <div className="subtitle">
              为您提供全面的氧化铝文献资源检索服务
            </div>
          </div>

          {/* 搜索区域 */}
          <div className="AppSearchBarWrapper">
            <div className="search-area">
              <div className="input-with-select">
                <div className="search-select">
                  <select 
                    value={searchField} 
                    onChange={(e) => setSearchField(e.target.value)}
                    className="search-dropdown"
                  >
                    {searchOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="请输入搜索内容"
                  className="search-input"
                />
                <button className="advanced-options-button" title="高级选项">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                  高级
                </button>
                <button onClick={handleSearch} className="search-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  搜索
                </button>
              </div>
            </div>
          </div>

          {/* 数据统计区域 */}
          <div className="AppCountingItems">
            <div className="di_news_natural_con">
              <div className="di_news_natural_title">
                <span>数据统计</span>
              </div>
              <div className="counting-grid">
                <div className="counting-item">
                  <div className="b_num">{paperNum.toLocaleString()}</div>
                  <div className="counting-label">论文</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{patentNum.toLocaleString()}</div>
                  <div className="counting-label">专利</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{informationNum.toLocaleString()}</div>
                  <div className="counting-label">资讯</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{projectNum.toLocaleString()}</div>
                  <div className="counting-label">项目</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{talentNum.toLocaleString()}</div>
                  <div className="counting-label">人才</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{reportNum.toLocaleString()}</div>
                  <div className="counting-label">报告</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{bookNum.toLocaleString()}</div>
                  <div className="counting-label">专著</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{conferenceNum.toLocaleString()}</div>
                  <div className="counting-label">会议</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{institutionNum.toLocaleString()}</div>
                  <div className="counting-label">机构</div>
                </div>
                <div className="counting-item">
                  <div className="b_num">{policiesNum.toLocaleString()}</div>
                  <div className="counting-label">政策</div>
                </div>
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

export default LiteratureDatabase;