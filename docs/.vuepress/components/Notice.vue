<template></template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import { Notification, MessageBox } from "element-ui";
export default {
  name: "Notice",
  data() {
    return {
      notifyPromise: Promise.resolve(),
    };
  },
  props: {
    initTop: {
      type: Number,
      default: 55,
    },
    data: {
      type: Array,
      default: [
        {
          id: null,
          title: "Latest announcement",
          content: "demo",
          isHtmlContent: false,
        },
      ],
    },
  },
  mounted() {
    const isShowed = sessionStorage.getItem("isShowed") || false;
    if (isShowed){
      return;
    }
    sessionStorage.setItem("isShowed", true);
    this.data.filter(item => item.id != null && !this.isIgnoreNotice(item.id)).forEach((element) => {
      this.notifyPromise = this.notifyPromise.then(() => {
        Notification({
          title: element.title,
          message: element.content,
          dangerouslyUseHTMLString: element.isHtmlContent || false,
          duration: 0,
          offset: this.initTop,
          onClose: () => {
            this.isShowAgain(element.id);
          },
        });
      });
    });
  },
  methods: {
    saveIgnoreNotice(id){
      const json = JSON.parse(localStorage.getItem("ignoreNotice") || "[]");
      json.push(id);
      localStorage.setItem("ignoreNotice", JSON.stringify(json));
    },
    isIgnoreNotice(id){
      const json = JSON.parse(localStorage.getItem("ignoreNotice") || "[]");
      return json.indexOf(id) >= 0;
    },
    isShowAgain(id) {
      MessageBox.confirm("Do you want to stop prompting this announcement next time?", "ignore announcement", {
        confirmButtonText: "No more prompts",
        cancelButtonText: "no",
        confirmButtonClass: "confirmButtonClass",
        cancelButtonClass: "cancelButtonClass",
        type: "info",
      }).then(() => {
        this.saveIgnoreNotice(id);
      });
    },
  },
};
</script>

<style>
.el-notification {
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.el-notification__title {
  border-bottom: none;
  color: var(--textColor);
}
.el-notification__content {
  color: var(--textColor);
}
.el-message-box {
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.el-message-box__title {
  color: var(--textColor);
}
.el-message-box__content {
  color: var(--textColor);
}
.confirmButtonClass{
  color: #FFF;
  background-color: #e01e5a;
  border-color: #e01e5a;
}
.confirmButtonClass:hover, .confirmButtonClass:focus{
  color: #FFF;
  background-color: #e04375;
  border-color: #e04375;
}
.cancelButtonClass{
  color: var(--textColor);
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.cancelButtonClass:hover, .cancelButtonClass:focus{
  color: var(--textColor);
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
</style>