import { PageContainer } from '@ant-design/pro-components';
import { Access, Outlet, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <div>
      主页
    </div>
  );
};

export default AccessPage;
