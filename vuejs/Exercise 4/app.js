new Vue({
  el: '#exercise',
  data: {
    toggleEffect: '',
    userClass: '',
    hotRodText: '',
    setHeight: 'false',
    userStyles: '',
    progress: 0
  },
  computed: {
    switchClasses: function () {
      var vm = this;
      return [
        this.userClass,
        {'more-height': vm.setHeight === 'true'}
      ];
    },
    runProgressBar: function () {
      var vm = this;
      return {
        'width': (vm.progress * 2) + '%'
      };
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function () {
        vm.toggleEffect = (vm.toggleEffect !== 'highlight') ? 'highlight' : 'shrink';
      }, 1000);
    },
    startProgress: function () {
      var vm = this;
      var progressInterval = setInterval(function () {
        vm.progress = vm.progress + 1;
        if (vm.progress > 50) {
          vm.progress = 0;
          clearInterval(progressInterval);
        }
      }, 50);
    }
  }
});
