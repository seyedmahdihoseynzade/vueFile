
<template>
    <div class="flex flex-col items-center gap-[3rem] justify-center mt-[5rem]">
        <h1>!!به سرویس دانلود فایل خوش آمدید</h1>

        <div class="flex flex-col items-center gap-[2rem]">
            <div class="flex justify-center gap-[1rem]">
                <label for="">آدرس فایل</label>
                <input v-model="link" type="text" class="bg-gray-200" placeholder="آدرس">
            </div>
            <p class="text-center">{{ link }}</p>
            <div @click="send" class="bg-green-100 px-[1.5rem] rounded-[2rem] cursor-pointer">{{statusBtn}}</div>
        </div>
    </div>
</template>



<script>
import { ref } from 'vue';
import { DownloadApi } from '@/api/download';


export default{
    setup(){
        let link = ref("")
        let statusBtn =ref("ارسال")

        function send(){
            statusBtn.value = "درحال ارسال..."
         DownloadApi({
            "downLoadLink":link.value,
         },(data)=>{
           statusBtn.value="ارسال"
           link.value = "view link:" + data
         })
        }

        return {link,send,statusBtn}
    }
}

</script>