   var vm=  new Vue({
        el:'#app',
        data:{
            email : "suraj@ainosoft.com"
        },
        methods:{
            process: function () {
                alert("submitted " + this.email);
            }
        }
    })