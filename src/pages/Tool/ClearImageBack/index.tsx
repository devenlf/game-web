import { PageContainer } from '@ant-design/pro-components';
import { Access, Outlet, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer>
      <span>文件去除背景</span>
    </PageContainer>
  );
};

export default AccessPage;
