import httpInstance from "@/utils/http";

// 获取banner

export function getBannnerAPI(){
    return httpInstance({
        url:'home/banner'
    })

}