var change = new Vue({
    el:'#change',
    data:function(){
        return{
            tel:'',
            chooseList:[
                {classify:10,money:2.8,checked:false},
                {classify:10,money:3.5,checked:false},
                {classify:10,money:4.5,checked:false},
                {classify:10,money:5.5,checked:false},
                {classify:10,money:6.5,checked:false},
                {classify:10,money:7.5,checked:false}
            ],
            nowPrice:2.5,
            prePrice:'3.00',
            range:'全国',
            provice:'',
            city:'',
            numOwer:'',
            fillIn:false,
            tab_index:0
        }
    },
    methods:{
        ready:function(){
              var this_obj = this;
              var tab_index = this_obj.tab_index;
              this_obj.chooseList[tab_index].checked = true;
              this_obj.nowPrice = this_obj.chooseList[tab_index].money;
          },
        telNum:function(){
            var this_obj = this;
            this_obj.fillIn = true;
            if(this_obj.tel == ''){
                this_obj.fillIn = false;
                this_obj.provice = '';
            }
        },
        telBlur:function(){
            var this_obj = this;
            var reg = /^1(3|4|5|7|8)\d{9}$/;
            if(this_obj.tel == ''){
                this_obj.provice = '';
            }else if(!reg.test(this_obj.tel)){
                this_obj.provice = '请输入正确手机号';
                $(".change_top_addre").css("color","red");
            }else{
                this_obj.provice = '北京-';
                this_obj.city = '北京';
                this_obj.numOwer = '移动';
            }
        },
        cancleNum:function(){
            this.tel = '';
            this.fillIn = false;
            this.provice = '';
            this.city = '';
            this.numOwer = '';
        },
        chooseRechange:function(index){
            var this_obj = this;
            this_obj.nowPrice = this_obj.chooseList[index].money;
            for(var i = 0;i < this_obj.chooseList.length;i++){
                this_obj.chooseList[i].checked = false;
            }
            this_obj.chooseList[index].checked = true;
        }
    }
})
change.ready();
