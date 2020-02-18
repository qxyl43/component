$(function(){
    var book_data = [];
    var  book_data=[
        {
            sortNum: 1, //用来排序的，或者当index用的
            title: "您对CRM系统的用户界面是否满意",
            img: "",
            num: 1, //感觉这个没用上，不知道用来干嘛的
            text: [
              {selectNum:'A',answer:'很满意'},
              {selectNum:'B',answer:'满意'},
              {selectNum:'C',answer:'一般'},
              {selectNum:'D',answer:'不满意'},
              {selectNum:'E',answer:'很不满意'},
              {selectNum:'F',answer:'不确定'}
            ],
            selectType:'radio', //问题类型
            type: 4
        },
        {
            sortNum: 2,
            title: "您对CRM系统的运行稳定性是否满意？",
            img: "",
            num: 1,
            text: [
              {selectNum:'A',answer:'很满意'},
              {selectNum:'B',answer:'满意'},
              {selectNum:'C',answer:'一般'},
              {selectNum:'D',answer:'不满意'},
              {selectNum:'E',answer:'很不满意'},
              {selectNum:'F',answer:'不确定'}
            ],
            selectType:'radio',
            type: 1
        },{ // 两条两条 当type类型是2时是左边一页
            sortNum: 3,
            title: "您对CRM系统的响应速度是否满意？",
            img: "images/page_L2.jpg",
            num: 0,
            text: [
              {selectNum:'A',answer:'很满意'},
              {selectNum:'B',answer:'满意'},
              {selectNum:'C',answer:'一般'},
              {selectNum:'D',answer:'不满意'},
              {selectNum:'E',answer:'很不满意'},
              {selectNum:'F',answer:'不确定'}
            ],
            selectType:'radio',
            type: 2
        }
        ,{ // 两条两条 当type类型是1时是右边一页
            sortNum: 4,
            title: "您对CRM系统的整体满意度是？",
            img: "",
            num: 0,
            text: [
              {selectNum:'A',answer:'很满意'},
              {selectNum:'B',answer:'满意'},
              {selectNum:'C',answer:'一般'},
              {selectNum:'D',answer:'不满意'},
              {selectNum:'E',answer:'很不满意'},
              {selectNum:'F',answer:'不确定'}
            ],
            selectType:'radio',
            type: 1
        },{
            sortNum: 5,
            title: "以下哪项功能对您平时的工作最有帮助？(可多选)",
            img: "images/page_L3.jpg",
            num: 1,
            text: [
              {selectNum:'A',answer:'客户账户信息'},
              {selectNum:'B',answer:'客户活动'},
              {selectNum:'C',answer:'路演管理'},
              {selectNum:'D',answer:'统计报表'},
              {selectNum:'E',answer:'BI报表'},
              {selectNum:'other',answer:'其他',answerTitle:''}
            ],
            selectType:'checkbox',
            type: 2
        },{
            sortNum: 6,
            title: "您希望系统增加那些数据资源，会对您的工作有帮助(可多选)",
            img: "images/page_L4.jpg",
            num: 1,
            text: [
              {selectNum:'A',answer:'产品信息',answerTitle:''},
              {selectNum:'B',answer:'专户信息',answerTitle:''},
              {selectNum:'C',answer:'账户业绩',answerTitle:''},
              {selectNum:'D',answer:'账户基本信息',answerTitle:''},
              {selectNum:'E',answer:'客户信息',answerTitle:''},
              {selectNum:'F',answer:'其他',answerTitle:''}
            ],
            selectType:'checkbox',
            type: 1
        },{
            sortNum: 7,
            title: "您希望哪些日常工作或业务，可以使用技术替代当前手工操作？",
            img: "images/page_L5.jpg",
            num: 2,
            text: [],
            inputText:'',
            selectType:'textarea',
            type: 2
        },{
            sortNum: 8,
            title: "您对CRM系统还有那些意见或建议？",
            img: "images/page_L6.jpg",
            num: 2,
            text: [],
            inputText:'',
            selectType:'textarea',
            type: 3
        }
    ];
    creat_html(book_data)

    function creat_html(data,num){

        $('.flipbook').html('');
        var b_ok = true,
            b_num = 0;
        var html =''; //总的输出html

        for(var i=0; i<data.length; i++){
            if(b_ok){
                var type = data[i].type,
                    p_text = data[i].text,
                    page_html = '',
                    title = data[i].title,
                    isImg = data[i].isimg;

                var isshow = 'block'; // 下一题是否显示

                if(i == data.length -1){
                    isshow = 'none';
                }
                if(type == 4){  // 左边页 注意type=2
                    var page_html = '';
                    var selectHtml=creat_type(data[i],data[i].selectType) //问题部分
                    page_html += '<div class="page_L1 cover">'+
                        // '<img src="'+data[i].img+'" alt="">' +
                        '<div class="page-num"><u>'+data[i].sortNum+'</u>/'+data.length+'</div>'+
                        '<div class="book-block"><p class="w_title">'+title+'</p>' + selectHtml +'</div>' +
                        '</div>'
                }
                if(type == 2){  // 左边页 注意type=2
                    var page_html = '';
                    var selectHtml=creat_type(data[i],data[i].selectType) //问题部分
                    page_html += '<div class="page_L1 cover">'+
                        // '<img src="'+data[i].img+'" alt="">' +
                        '<div class="page-num"><u>'+data[i].sortNum+'</u>/'+data.length+'</div>'+
                        '<div class="book-block"><p class="w_title">'+title+'</p>' + selectHtml +'</div>' +
                        '<p class="pre_page">上一题</p> ' +
                        '</div>'
                }
                if(type == 1){ // 右边页，注意type=1
                    var page_html = '';
                    var selectHtml=creat_type(data[i],data[i].selectType) //问题部分
                    page_html += '<div class="page_d">'+
                        // '<img src="'+data[i].img+'" alt="">' +
                        '<div class="page-num"><u>'+data[i].sortNum+'</u>/'+data.length+'</div>'+
                        '<div class="book-block"><p class="w_title">'+title+'</p>' + selectHtml +'</div>' +
                        '<p class="next_page" style="display:'+isshow+'">下一题</p> ' +
                        '</div>'
                }
                if(type == 3){ // 结束页
                    var page_html = '';
                    var selectHtml=creat_type(data[i],data[i].selectType)
                    page_html += '<div class="page_d">'+
                        // '<img src="'+data[i].img+'" alt="">' +
                        '<div class="page-num"><u>'+data[i].sortNum+'</u>/'+data.length+'</div>'+
                        '<div class="book-block"><p class="w_title">'+title+'</p>' + selectHtml +'</div>' +
                        '<p class="next_page" >完成</p> ' +
                    '</div>'
                }
                html+=page_html;
            }
        }
        if(b_ok){
            $('.flipbook').append(html);
            var turnWidth = $('#cover').outerWidth(),
                turnHeight = $('#cover').outerHeight();

            $('.flipbook').turn({
                width: turnWidth*2+20,
                height: turnHeight,
                elevation: 50,
                // page:2, 指定在第几页
                gradients: true,
                autoCenter: true,
                display:'double',
                when: { turning: function(event, page, pageObject) {

                } }
            });

            // $('.bookmark').on('click','li',function(){ //原来直接定位到某一页的 已经去掉了
            //     var self = $(this),
            //         id = self.attr('data-id');
            //     $('.flipbook').turn('page', id);
            // })

            // $('.back_catalog').click(function(){ //原来直接定位到某一页的 已经去掉了
            //     $('.flipbook').turn('page', 1);
            // })
            
            // 单选复选
            // 在这里可以取单选复选框的值,这里需要改造
            $(document).on('click', '.book-ul li', function(e) {
               
                if ($(this).find('input').attr('type')==='radio') {
                    $(this).siblings().removeClass("on");
                    $(this).addClass("on");
                    if ($(e.target).is("input")) return //阻止冒泡，只点击一次
                    console.log($(this).find('input').val())
                }else{
                    if ($(e.target).is("input")) return //阻止冒泡，只点击一次。因为lable与input在一起会触发二次。其他方法可用使用label标签的for属性解决
                    $(this).toggleClass('on');
                    console.log($(this).find('input').val())
                }
                
            })



        }

    }
    

    // 问题拼合成html begin
    function creat_type(data,type){
        dataText=data.text  // 问题数组
        //console.log(dataText)
        var selectHtml=""  // 问题需要返回的html (带html标签的)
        if (type==="radio" || type==="checkbox") { //当单选框与复选框
            selectHtml='<div class="book-ul"><ul>'
            for(var i=0; i<dataText.length; i++){
              var classHtml=""
              var textareaHtml=""
              if (i == 0) classHtml='on'
              // 需要客户写的
              if (dataText[i].answerTitle == '') textareaHtml='<textarea rows="2" cols="20" placeholder="请输入你的想法">'+'</textarea>'
              // 整合
              selectHtml+='<li class='+classHtml+'><label><input type='+type+' name="sex" value="'+dataText[i].selectNum+'">'+
                          '<span>'+dataText[i].selectNum+'.</span>'+dataText[i].answer+
                          '</label>'+textareaHtml+'</li>'
            }
            selectHtml+='</ul></div>'
        }else{  //文本域情况
            selectHtml+='<div class="book-textarea"><textarea rows="8" cols="20">'+'</textarea></div>'
        }
        return selectHtml
        // console.log(selectHtml,dataText)
    }
    // end
})