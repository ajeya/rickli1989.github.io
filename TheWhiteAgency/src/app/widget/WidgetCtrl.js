class WidgetCtrl {

  constructor(WidgetService){
    this.isDone = false;
    this.WidgetService = WidgetService;
    this.init();
  }

  init() {
    this.WidgetService.loadJson().then((res) => { 
      this.duration = res.data.data.lightbox.duration;
      this.start = res.data.data.lightbox.start;
      this.end = res.data.data.lightbox.finish;
      this.isDone = true;
    });
    this.count = 1;
    this.isShow = true;
  }

  hideWidget() {
    this.isShow = !this.isShow;
  }

  reset() {
    this.count++;
  }

}

WidgetCtrl.$inject = ['WidgetService'];
export default WidgetCtrl;
