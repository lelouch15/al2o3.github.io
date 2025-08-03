// 主应用组件
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routeConfig } from './config/routes';
import { APP_CONFIG } from './utils/constants';
import './styles/globals.css';
import './App.css';

/**
 * 全局加载组件
 */
const GlobalLoader = () => (
  <div className="global-loader">
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">正在加载...</p>
    </div>
  </div>
);

/**
 * 全局错误边界组件
 */
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // 错误日志记录
    console.error('App Error Boundary:', error, errorInfo);
    
    // 这里可以添加错误报告服务
    // errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">应用程序出现错误</h1>
            <p className="error-message">
              抱歉，应用程序遇到了意外错误。请尝试刷新页面或返回首页。
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>错误详情（开发模式）</summary>
                <pre className="error-stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            
            <div className="error-actions">
              <button 
                className="btn btn-primary"
                onClick={this.handleReload}
              >
                刷新页面
              </button>
              <button 
                className="btn btn-outline"
                onClick={this.handleGoHome}
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * 404页面组件
 */
const NotFound = () => (
  <div className="not-found">
    <div className="not-found-content">
      <div className="not-found-icon">🔍</div>
      <h1 className="not-found-title">页面未找到</h1>
      <p className="not-found-message">
        抱歉，您访问的页面不存在。请检查URL是否正确，或返回首页。
      </p>
      <div className="not-found-actions">
        <a href="/" className="btn btn-primary">
          返回首页
        </a>
        <button 
          className="btn btn-outline"
          onClick={() => window.history.back()}
        >
          返回上页
        </button>
      </div>
    </div>
  </div>
);

/**
 * 主应用组件
 */
function App() {
  // 设置全局应用配置
  React.useEffect(() => {
    // 设置页面标题
    document.title = APP_CONFIG.name;
    
    // 设置meta标签
    const setMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    setMetaTag('description', APP_CONFIG.description);
    setMetaTag('keywords', '氧化铝,材料数据库,数据中心,材料科学,化学工程');
    setMetaTag('author', 'Rare Earth Data Center Team');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // 设置Open Graph标签
    const setOGTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    setOGTag('og:title', APP_CONFIG.name);
    setOGTag('og:description', APP_CONFIG.description);
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.origin);
    setOGTag('og:site_name', APP_CONFIG.name);
    
    // 设置主题色
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#1976d2';
    
  }, []);

  return (
    <AppErrorBoundary>
      <Router>
        <div className="app">
          <Suspense fallback={<GlobalLoader />}>
            <Routes>
              {/* 动态生成路由 */}
              {routeConfig.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                  exact={route.exact}
                />
              ))}
              
              {/* 404页面 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AppErrorBoundary>
  );
}

export default App;
