import React from 'react';
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';

const { Header, Content, Footer } = Layout;

const CatHeader = () => {
  return (
    <Header className={'header'}>
      <div className={'logo-header'}>
        <img
          src={'https://image.flaticon.com/icons/png/512/1581/1581602.png'}
          className={'logo-image-header'}
        ></img>
        <span className={'logo-title-header'}>&nbsp;DELCAT</span>
        <span className={'logo-subtitle-header'}>
          &nbsp;&nbsp;доставляй вигідно!
        </span>
      </div>
    </Header>
  );
};

export default CatHeader;
