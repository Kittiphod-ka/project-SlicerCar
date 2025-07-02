# 🚗 Project SlicerCar

---

## 🛠 วิธีเริ่มต้นใช้งาน


# 1. สร้างโฟลเดอร์สำหรับเก็บโปรเจกต์ (ข้ามได้ถ้ามีแล้ว)
\```bash
mkdir my-project

cd my-project
\```
# 2. Clone โปรเจกต์จาก GitHub โดยเลือก branch master
git clone -b master https://github.com/Kittiphod-ka/project-SlicerCar.git

# 3. เข้าไปในโฟลเดอร์โปรเจกต์
cd project-SlicerCar

# 4. สั่งรัน Docker Compose 
docker-compose up -d --build

# 5. เปิดเว็บเบราว์เซอร์ และเข้าที่:
http://localhost:3000

# หากต้องการหยุด
docker-compose down
