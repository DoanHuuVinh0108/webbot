import React, { useState, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import icon from "../asset/image/iconTree.svg";
import SectionComponent from "./SectionComponent";
import authService from "../service/authService";
import userService from "../service/userService";
const TablePrice = () => {
  const userInfo = authService.getCurrentUser() || {};
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userService.getPriceBots();
        setCourses(data); // Đặt dữ liệu từ API vào state courses
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const MY_BANK = {
    BANK_ID: "BIDV",
    ACCOUNT_NO: "8821033620",
  };
  const user = {
    userID: userInfo.userId,
  };
  const [qrData, setQrData] = useState({
    qrUrl: "https://qrcode-gen.com/images/qrcode-default.png",
    content: "NDCK",
    price: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [codeActive, setCodeActive] = useState("");
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const handleBuyNow = (course) => {
    const QR = `https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${course.price}&addInfo=${course.botTradingId};=${user.userID}`;
    setQrData({
      qrUrl: QR,
      content: `CourseID:${course.courseID};User:${user.userID}`,
      price: course.coursePrice,
    });
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleActive = () => {
    console.log("Thông tin thanh toán", codeActive);
    alert("Tài khoản kích hoạt thành công!");
    setCodeActive("");
    setModalVisible(false); // Tùy chọn đóng modal sau khi kích hoạt
  };

  return (
    <div>
      <SectionComponent text="Bảng giá dịch vụ" />

      <div className="grid md:grid-cols-3 grid-cols-1">
        {courses.map((course, index) => (
          <div
            key={course.botTradingId}
            className="courses_inner m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
          >
            <img
              src={icon}
              alt="icon"
              className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
            />
            <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
              Gói {course.month} tháng
            </p>
            <p className="blueberry font-semibold text-gray-600 text-xs">
              Tư vấn viên hỗ trợ 24/7 thông qua điện thoại, Email, Telegram,
              Zalo, Facebook
            </p>
            <div className="ordernow flex flex-row justify-between items-center w-full">
              <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                {formatCurrency(course.price)}
              </p>
              <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
                <button onClick={() => handleBuyNow(course)}>Mua ngay</button>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="ĐĂNG KÝ SỬ DỤNG BOT"
        open={modalVisible}
        onCancel={handleCancel}
        footer={[
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button key="back" onClick={handleCancel}>
              Đóng
            </Button>
            <Button key="active" onClick={handleActive}>
              Kích hoạt
            </Button>
          </div>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ padding: 5 }}>
            Quý khách vui lòng thanh toán vào TK để nhận Mã kích hoạt
          </p>
          <p style={{ padding: 5 }}>
            Ngân hàng:{" "}
            <span style={{ color: "#25a09b", fontWeight: "bold" }}>
              {MY_BANK.BANK_ID}
            </span>
          </p>
          <p style={{ padding: 5 }}>
            Số TK:{" "}
            <span style={{ color: "#25a09b", fontWeight: "bold" }}>
              {" "}
              {MY_BANK.ACCOUNT_NO}
            </span>
          </p>
          <img
            className="course_qr_img"
            src={qrData.qrUrl}
            alt="QR Code"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
          <Input
            placeholder="Nhập mã kích hoạt"
            value={codeActive}
            onChange={(e) => setCodeActive(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default TablePrice;
