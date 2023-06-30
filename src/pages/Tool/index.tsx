import { PageContainer } from '@ant-design/pro-components';
import { Access, Outlet, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default AccessPage;
