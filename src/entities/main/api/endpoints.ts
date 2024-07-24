export const API_ENDPOINTS = {
  MAIN: {
    CONTENTS: {
      method: 'GET',
      path: `/api/main`,
      revalidate: 7,
    },
    BANNER: {
      method: 'GET',
      path: `/api/main/banners`,
      revalidate: 5,
    },
  },
};
