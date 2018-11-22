# koa-socket.io-demo

## demo/01 - Hello world
In ra console thông báo mỗi khi có người dùng kết nối và ngắt kết nối. Connection và disconnect là các sự kiện built in.

## demo/02 - Xử lý sự kiện message (built in)
Xử lý một tin nhắn từ server đến client.

## demo/03 và demo/04 - Xử lý sự kiện tùy chỉnh
demo/03 một sự kiện tùy chỉnh server gửi đến client.
demo/04 một sự kiện tùy chỉnh client gửi đến server.

## demo/05 và demo/06 Broadcasting
Server gửi sự kiện tới toàn bộ client.
demo/05 gửi tất cả tin nhắn như nhau. demo/06 gửi lời chào tới người mới và nhưng người online còn lại là thông tin số người đang online.

## demo/07 Namespaces
Tạo không gian tên các kết nối.

## demo/08 Room
Tạo phòng và đăng nhập phòng.

## demo/09 Chat
Một ứng dụng chat đơn giản.

# Chạy các demo

Cài đặt các phụ thuộc:

```sh
npm install
```
Chạy demo 01 đến 09 sử dụng:
```sh
npm run test01
```
Thay 01 bằng số thứ tự của demo cần chạy
