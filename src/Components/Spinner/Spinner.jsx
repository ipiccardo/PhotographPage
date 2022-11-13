// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// export const Spinner = () => {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', width: '100px', height: '100px', marginTop: '10%', }}>
//       <CircularProgress sx={{color: 'black'}} />
//     </Box>
//   );
// }

// export default Spinner

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const Spinner =() => {
  return (
    <Stack spacing={1}>
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
      <Skeleton variant="rounded" width='200%' height={90} />
    </Stack>
  );
}

export default Spinner