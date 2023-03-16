import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Box bgcolor="red">
        <Outlet />
      </Box>
    </>
  );
};

export { DashboardLayout };
