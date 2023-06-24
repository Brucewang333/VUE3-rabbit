// 封装分类相关业务代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
// 获取分类数据
export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 目标：路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id);
  });
  return{
    categoryData
  }
}
