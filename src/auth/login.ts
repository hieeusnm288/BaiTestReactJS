import axios from 'axios';

// Định nghĩa hàm login
export const login = async (username: string) => {
  try {
    // Gửi yêu cầu POST tới API đăng nhập
    const response = await axios.post('https://api-test-web.agiletech.vn/auth/login', {
      username, // Dữ liệu gửi đi
    });

    // Lấy accessToken và refreshToken từ phản hồi
    const { accessToken, refreshToken } = response.data;

    // Lưu trữ accessToken và refreshToken trong localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    // Đặt timeout để làm mới accessToken sau 1 phút
    setTimeout(refreshAccessToken, 60000); // 60,000ms = 1 phút

    return true; // Đăng nhập thành công
  } catch (error) {
    console.error('Đăng nhập thất bại', error);
    return false; // Đăng nhập thất bại
  }
};

// Định nghĩa hàm làm mới accessToken
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/auth/refresh-token', {
      token: refreshToken,
    });

    const { accessToken } = response.data;
    localStorage.setItem('accessToken', accessToken);

    setTimeout(refreshAccessToken, 60000); // 60,000ms = 1 phút
  } catch (error) {
    console.error('Làm mới access token thất bại', error);
    // Xử lý lỗi nếu làm mới token thất bại
  }
};
