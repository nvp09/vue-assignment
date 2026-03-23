<script setup lang="ts">
import { ref } from "vue";

// 1. ตัวแปรเก็บค่าจาก input
const name = ref<string>("");

// 2. ตัวแปรเก็บรายชื่อทั้งหมด
const participants = ref<string[]>([]);

// 3. ฟังก์ชันเพิ่มชื่อ
const addParticipant = () => {
  if (name.value.trim() !== "") {
    participants.value.push(name.value);
    name.value = ""; // ล้าง input
  }
};
</script>

<template>
  <div class="assignment-container">
    <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>

    <!-- 4. v-model -->
    <input
      v-model="name"
      placeholder="กรอกชื่อผู้เข้าร่วม"
    />

    <!-- 5. @click -->
    <button @click="addParticipant">เพิ่มชื่อ</button>

    <div class="participant-list">
      <!-- 6. v-if -->
      <p v-if="participants.length === 0">
        ยังไม่มีผู้เข้าร่วม
      </p>

      <!-- 7 + 8 -->
      <ul v-else>
        <li
          v-for="(person, index) in participants"
          :key="index"
        >
          {{ person }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.assignment-container {
  max-width: 400px;
  margin: auto;
  padding: 12px;
  border-radius: 8px;
  background: skyblue;
}

button {
  margin-left: 8px;
}
</style>