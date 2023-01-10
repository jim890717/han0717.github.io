//json 靜態資料庫

var locationData = [{
    "place": "台北", "position": "north","api":"臺北市",
    "region":[{"area":"中正區"},{"area":"萬華區"},{"area":"大同區"},
    {"area":"中山區"},{"area":"松山區"},{"area":"大安區"},{"area":"信義區"},
    {"area":"內湖區"},{"area":"南港區"},{"area":"士林區"},{"area":"北投區"},{"area":"文山區"},]
  }, {
    "place": "新北", "position": "north","api":"新北市",
    "region":[{"area":"萬里區"},{"area":"金山區"},{"area":"板橋區"},
    {"area":"汐止區"},{"area":"深坑區"},{"area":"石碇區"},{"area":"瑞芳區"},
    {"area":"平溪區"},{"area":"雙溪區"},{"area":"貢寮區"},{"area":"新店區"},
    {"area":"坪林區"},{"area":"烏來區"},{"area":"永和區"},{"area":"中和區"},
    {"area":"土城區"},{"area":"三峽區"},{"area":"樹林區"},{"area":"鶯歌區"},
    {"area":"三重區"},{"area":"新莊區"},{"area":"泰山區"},{"area":"林口區"},
    {"area":"蘆洲區"},{"area":"五股區"},{"area":"八里區"},{"area":"淡水區"},
    {"area":"三芝區"},{"area":"石門區"}]
  }, {
    "place": "基隆", "position": "north","api":"基隆市",
    "region":[{"area":"仁愛區"},{"area":"中正區"},{"area":"信義區"},
    {"area":"中山區"},{"area":"安樂區"},{"area":"七堵區"},{"area":"暖暖區"}]      
  }, {
    "place": "桃園", "position": "north","api":"桃園市",
    "region":[{"area":"桃園區"},{"area":"中壢區"},{"area":"八德區"},
    {"area":"平鎮區"},{"area":"大溪區"},{"area":"楊梅區"},{"area":"龜山區"},
    {"area":"蘆竹區"},{"area":"大園區"},{"area":"觀音區"},{"area":"新屋區"},
    {"area":"龍潭區"},{"area":"復興區"}]
  }, {
    "place": "新竹", "position": "west","api":"新竹市",///新竹縣
    "region":[{"area":"東區"},{"area":"北區"},{"area":"香山區"},
    {"area":"竹北市"},{"area":"竹東鎮"},{"area":"新埔鎮"},{"area":"關西鎮"},
    {"area":"新豐鄉"},{"area":"峨眉鄉"},{"area":"寶山鄉"},{"area":"橫山鄉"},
    {"area":"北埔鄉"},{"area":"尖石鄉"},{"area":"芎林鄉"},{"area":"湖口鄉"}]
  }, {
    "place": "苗栗", "position": "west","api":"苗栗縣",
    "region":[{"area":"苗栗市"},{"area":"頭份市"},{"area":"竹南鎮"},
    {"area":"後龍鎮"},{"area":"通霄鎮"},{"area":"苑裡鎮"},{"area":"卓蘭鎮"},
    {"area":"造橋鄉"},{"area":"西湖鄉"},{"area":"頭屋鄉"},{"area":"公館鄉"},
    {"area":"銅鑼鄉"},{"area":"三義鄉"},{"area":"大湖鄉"},{"area":"獅潭鄉"},
    {"area":"三灣鄉"},{"area":"南庄鄉"},{"area":"泰安鄉"}]
  }, {
    "place": "台中", "position": "west","api":"臺中市",
    "region":[{"area":"中區"},{"area":"東區"},{"area":"西區"},
    {"area":"南區"},{"area":"北區"},{"area":"西屯區"},{"area":"南屯區"},
    {"area":"北屯區"},{"area":"豐原區"},{"area":"大里區"},{"area":"太平區"},
    {"area":"清水區"},{"area":"沙鹿區"},{"area":"大甲區"},{"area":"東勢區"},
    {"area":"梧棲區"},{"area":"烏日區"},{"area":"神岡區"},{"area":"大肚區"},
    {"area":"大雅區"},{"area":"后里區"},{"area":"霧峰區"},{"area":"潭子區"},
    {"area":"龍井區"},{"area":"外埔區"},{"area":"和平區"},{"area":"石岡區"},
    {"area":"大安區"},{"area":"新社區"}]
  }, {
    "place": "彰化", "position": "west","api":"彰化縣",
    "region":[{"area":"彰化市"},{"area":"員林市"},{"area":"和美鎮"},
    {"area":"鹿港鎮"},{"area":"溪湖鎮"},{"area":"田中鎮"},{"area":"北斗鎮"},
    {"area":"二林鎮"}]
  }, {
    "place": "雲林", "position": "west","api":"雲林縣",
    "region":[{"area":"斗六市"},{"area":"西螺鎮"},{"area":"土庫鎮"},
    {"area":"虎尾鎮"},{"area":"斗南鎮"},{"area":"北港鎮"},{"area":"麥寮鄉"},
    {"area":"崙背鄉"},{"area":"二崙鄉"},{"area":"莿桐鄉"},{"area":"林內鄉"},
    {"area":"臺西鄉"},{"area":"東勢鄉"},{"area":"褒忠鄉"},{"area":"元長鄉"},
    {"area":"大埤鄉"},{"area":"古坑鄉"},{"area":"四湖鄉"},{"area":"口湖鄉"},
    {"area":"水林鄉"},]
  }, {
    "place": "南投", "position": "west","api":"南投縣",
    "region":[{"area":"南投市"},{"area":"埔里鎮"},{"area":"草屯鎮"},
    {"area":"竹山鎮"},{"area":"集集鎮"},{"area":"名間鄉"},{"area":"鹿谷鄉"},
    {"area":"中寮鄉"},{"area":"魚池鄉"},{"area":"國姓鄉"},{"area":"水里鄉"},
    {"area":"仁愛鄉"},{"area":"信義鄉"}]
  }, {
    "place": "嘉義", "position": "south","api":"嘉義市",///嘉義縣
    "region":[{"area":"嘉義市"},{"area":"太保市"},{"area":"朴子市"},
    {"area":"布袋鎮"},{"area":"大林鎮"},{"area":"民雄鄉"},{"area":"溪口鄉"},
    {"area":"新港鄉"},{"area":"六腳鄉"},{"area":"東石鄉"},{"area":"義竹鄉"},
    {"area":"鹿草鄉"},{"area":"水上鄉"},{"area":"中埔鄉"},{"area":"竹崎鄉"},
    {"area":"梅山鄉"},{"area":"番路鄉"},{"area":"大埔鄉"},{"area":"阿里山鄉"},]
  }, {
    "place": "台南", "position": "south","api":"臺南市",
    "region":[{"area":"鹽水區"},{"area":"將軍區"},{"area":"白河區"},
    {"area":"北門區"},{"area":"柳營區"},{"area":"新化區"},{"area":"後壁區"},
    {"area":"善化區"},{"area":"東山區"},{"area":"新市區"},{"area":"麻豆區"},
    {"area":"山上區"},{"area":"官田區"},{"area":"玉井區"},{"area":"大內區"},
    {"area":"楠西區"},{"area":"佳里區"},{"area":"南化區"},{"area":"西港區"},
    {"area":"左鎮區"},{"area":"七股區"},{"area":"龍崎區"},{"area":"歸仁區"},]
  }, {
    "place": "高雄", "position": "south","api":"高雄市",      
    "region":[{"area":"楠梓區"},{"area":"左營區"},{"area":"鼓山區"},
    {"area":"三民區"},{"area":"苓雅區"},{"area":"新興區"},{"area":"前金區"},
    {"area":"鹽埕區"},{"area":"前鎮區"},{"area":"旗津區"},{"area":"小港區"},
    {"area":"鳳山區"},{"area":"茂林區"},{"area":"甲仙區"},{"area":"六龜區"},
    {"area":"杉林區"},{"area":"美濃區"},{"area":"內門區"},{"area":"仁武區"},
    {"area":"田寮區"},{"area":"旗山區"},{"area":"梓官區"},{"area":"阿蓮區"},
    {"area":"湖內區"},{"area":"岡山區"},{"area":"茄萣區"},{"area":"路竹區"},
    {"area":"鳥松區"},{"area":"永安區"},{"area":"燕巢區"},{"area":"大樹區"},
    {"area":"大寮區"},{"area":"林園區"},{"area":"彌陀區"},{"area":"橋頭區"},
    {"area":"大社區"},{"area":"那瑪夏區"},{"area":"桃源區"}]
  }, {
    "place": "屏東", "position": "south","api":"屏東縣",
    "region":[{"area":"屏東市"},{"area":"潮州鎮"},{"area":"東港鎮"},
    {"area":"來義鄉"},{"area":"九如鄉"},{"area":"里港鄉"},{"area":"鹽埔鄉"},
    {"area":"高樹鄉"},{"area":"三地門鄉"},{"area":"霧台鄉"},{"area":"萬丹鄉"},
    {"area":"長長治鄉"},{"area":"麟洛鄉"},{"area":"萬巒鄉"},{"area":"內埔鄉"},
    {"area":"竹田鄉"},{"area":"新埤鄉"},{"area":"瑪家鄉"},{"area":"泰武鄉"},
    {"area":"來義鄉"},{"area":"枋寮鄉"},{"area":"新園鄉"},{"area":"崁頂鄉"},
    {"area":"林邊鄉"},{"area":"南州鄉"},{"area":"佳冬鄉"},{"area":"琉球鄉"},
    {"area":"車城鄉"},{"area":"滿州鄉"},{"area":"枋山鄉"},{"area":"春日鄉"},
    {"area":"獅子鄉"},{"area":"牡丹鄉"}]
  }, {
    "place": "宜蘭", "position": "east","api":"宜蘭縣",
    "region":[{"area":"宜蘭市"},{"area":"頭城鎮"},{"area":"羅東鎮"},
    {"area":"蘇澳鎮"},{"area":"員山鄉"},{"area":"礁溪鄉"},{"area":"狀圍鄉"},
    {"area":"三星鄉"},{"area":"五結鄉"},{"area":"冬山鄉"},{"area":"大同鄉"},
    {"area":"南澳鄉"}]
  }, {
    "place": "花蓮", "position": "east","api":"花蓮縣",
    "region":[{"area":"花蓮市"},{"area":"鳳林鎮"},{"area":"玉里鎮"},
    {"area":"新城鄉"},{"area":"吉安鄉"},{"area":"壽豐鄉"},{"area":"光復鄉"},
    {"area":"瑞穗鄉"},{"area":"富里鄉"},{"area":"秀林鄉"},{"area":"萬榮鄉"},
    {"area":"卓溪鄉"}]
  }, {
    "place": "台東", "position": "east","api":"臺東縣",
    "region":[{"area":"台東市"},{"area":"成功鎮"},{"area":"關山鎮"},
    {"area":"長濱鄉"},{"area":"東河鄉"},{"area":"池上鄉"},{"area":"鹿野鄉"},
    {"area":"海端鄉"},{"area":"延平鄉"},{"area":"卑南鄉"},{"area":"太麻里鄉"},
    {"area":"金峰鄉"},{"area":"大武鄉"},{"area":"達仁鄉"},{"area":"綠島鄉"},
    {"area":"蘭嶼鄉"},]
  }
  ];

  init();
 
  var weather;
  function ajaxTest(area){
    $.ajax({
      url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7AE3D081-CC8D-4245-B59B-F16F973A74FF&format=JSON&locationName="+area+"",
      method:"get",
      dataType:"JSON",
      success:function(res){
        weather=res;
        /*
        $("#wea01").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[0].parameter.parameterName);
        $("#wea02").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[1].parameter.parameterName);
        $("#wea03").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[2].parameter.parameterName);*/
        //$("#tem01").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='CI')[0].time[0].parameter.parameterName);
        //$("#tem02").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='CI')[0].time[1].parameter.parameterName);
        //$("#tem03").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='CI')[0].time[2].parameter.parameterName);
        $("#tem01").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='MinT')[0].time[0].parameter.parameterName+"°C ~ "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='MaxT')[0].time[0].parameter.parameterName+"°C");
        $("#tem02").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='MinT')[0].time[1].parameter.parameterName+"°C ~ "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='MaxT')[0].time[1].parameter.parameterName+"°C");
        $("#tem03").text(weather.records.location[0].weatherElement.filter(x=>x.elementName=='MinT')[0].time[2].parameter.parameterName+"°C ~ "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='MaxT')[0].time[2].parameter.parameterName+"°C");
        
        $("#hum01").text(" "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='PoP')[0].time[0].parameter.parameterName+"%");
        $("#hum02").text(" "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='PoP')[0].time[1].parameter.parameterName+"%");
        $("#hum03").text(" "+weather.records.location[0].weatherElement.filter(x=>x.elementName=='PoP')[0].time[2].parameter.parameterName+"%");
        //$("#LocationView").modal("show");
        $("#wea01").html('<img width="99" height="77" src="./pict/day/'+weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[0].parameter.parameterValue+'.svg" alt="" title="">');
        $("#wea02").html('<img width="99" height="77" src="./pict/night/'+weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[1].parameter.parameterValue+'.svg" alt="" title="">');
        $("#wea03").html('<img width="99" height="77" src="./pict/day/'+weather.records.location[0].weatherElement.filter(x=>x.elementName=='Wx')[0].time[2].parameter.parameterValue+'.svg" alt="" title="">');
        
        var today = new Date().getFullYear()+"-";
        var todayTxt="";
        if((new Date().getMonth()+1)>=10){
          today+=(new Date().getMonth()+1)+"-"
          todayTxt+=(new Date().getMonth()+1)+"/"
        }else{
          today+="0"+(new Date().getMonth()+1)+"-"
          todayTxt+="0"+(new Date().getMonth()+1)+"/"
        }
        if(new Date().getDate()>=10){
          today+=(new Date().getDate())
          todayTxt+=(new Date().getDate())
        }else{
          today+="0"+(new Date().getDate())
          todayTxt+="0"+(new Date().getDate())
        }
        
        var nextDay = new Date(new Date().setDate(new Date().getDate()+1)).getFullYear()+"-";
        if((new Date(new Date().setDate(new Date().getDate()+1)).getMonth()+1)>=10){
          nextDay+=(new Date(new Date().setDate(new Date().getDate()+1)).getMonth()+1)+"-"
        }else{
          nextDay+="0"+(new Date(new Date().setDate(new Date().getDate()+1)).getMonth()+1)+"-"
        }
        if(new Date(new Date().setDate(new Date().getDate()+1)).getDate()>=10){
          nextDay+=new Date(new Date().setDate(new Date().getDate()+1)).getDate()
        }else{
          nextDay+="0"+(new Date(new Date().setDate(new Date().getDate()+1)).getDate())
        }
        $.ajax({            
          url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=CWB-7AE3D081-CC8D-4245-B59B-F16F973A74FF&format=JSON&locationName="+area+"&timeFrom="+today+"&timeTo="+nextDay+"",
          method:"get",
          dataType:"JSON",
          success:function(resa){
            $("#areaImfomation").text(area+"  ("+todayTxt+")");
            $("#sunrise").text(resa.records.locations.location[0].time[0].parameter.filter(x=>x.parameterName=='日出時刻')[0].parameterValue);
            $("#sundown").text(resa.records.locations.location[0].time[0].parameter.filter(x=>x.parameterName=='日沒時刻')[0].parameterValue);
            
            if(new Date().getHours()==18){
              if(new Date().getMinutes()>0 || Date().getSeconds()>0){
                $("#firstDay").text("今晚明晨")
                $("#secondDay").text("明天白天")
                $("#thirdDay").text("明天晚上")             
                $("#firstTime").text("18:00"+"~"+"06:00");
                $("#secondTime").text("06:00"+"~"+"18:00");
                $("#thirdTime").text("18:00"+"~"+"06:00");
              }else{
                $("#firstDay").text("今天白天")
                $("#secondDay").text("今晚明晨")
                $("#thirdDay").text("明天白天")
                $("#firstTime").text("06:00"+"~"+"18:00");
                $("#secondTime").text("18:00"+"~"+"06:00");
                $("#thirdTime").text("06:00"+"~"+"18:00");
              }
            }else{
              if(new Date().getHours()>18){
                $("#firstDay").text("今晚明晨")
                $("#secondDay").text("明天白天")
                $("#thirdDay").text("明天晚上")
                $("#firstTime").text("18:00"+"~"+"06:00");
                $("#secondTime").text("06:00"+"~"+"18:00");
                $("#thirdTime").text("18:00"+"~"+"06:00");
              }else{
                $("#firstDay").text("今天白天")
                $("#secondDay").text("今晚明晨")
                $("#thirdDay").text("明天白天")
                $("#firstTime").text("06:00"+"~"+"18:00");
                $("#secondTime").text("18:00"+"~"+"06:00");
                $("#thirdTime").text("06:00"+"~"+"18:00");
              }
            }
            
            
            DateTimeLoading();
            $("#LocationView").modal("show");
          },
          error:function(err){console.log(err)},
        });
      
      },
      error:function(err){console.log(err)},
    });

  }

  function DateTimeLoading(){
    if((new Date().getHours())>=10){
      hour=(new Date().getHours())      
    }else{
      hour="0"+(new Date().getHours())
    }
    if((new Date().getMinutes())>=10){
      minute=(new Date().getMinutes())      
    }else{
      minute="0"+(new Date().getMinutes())
    }
    if(new Date().getSeconds()>=10){
      second=(new Date().getSeconds())
    }else{
      second="0"+(new Date().getSeconds())
    }


    $("#DateTimeTxt").text(hour+":"+minute+":"+second);
    clearTimeout()
    setTimeout("DateTimeLoading()",1000);
    
  }


  var checkCount;
  function init(){
    var checkboxHtml = "";
    checkCount=0;
    var divplace="";
    for (i = 0; i < locationData.length; i++) {
      if(locationData[i].position!=divplace){
        if(i!=0){
          checkboxHtml+='</div>'
        }
        divplace=locationData[i].position;
        checkboxHtml+='<div class="'+divplace+'">'
      }
      checkboxHtml += '<div class="form-check" ><input class="form-check-input" type="checkbox" value="' + locationData[i].place + '"><label class="form-check-label">' +
      locationData[i].place + '</label></div>';

    }
    checkboxHtml+='</div><button class="drbtn btn btn-primary" id="draw">繪製</button><button class="clbtn btn btn-primary" id="clean">清除</button>'
    $(".selectLocation").html(
      checkboxHtml
    );
    $("#clean").click(function(){
      init();
      $(".xuanxiang").html(
          ''
      );
      
      });
      $("#draw").click(function () {
          var selectData = [];
          $('.form-check-input').each(function () {
          var sThisVal = (this.checked ? $(this).val() : "");
          if (sThisVal != '') {
              selectData.push(sThisVal);
          }
      });
      $(".xuanxiang").html(
          ''
      );
      $(".xuanxiang").css("transition-duration","500ms")
      $(".xuanxiang").css("transform","rotate(0deg)")
      
      if (selectData.length > 0) {
          drawRoulette(selectData);
      }

      });


    $('input[type=checkbox]').change(function() {
      
      $(this).css("border-color","wheat")
      $(this).css("color","wheat");
      $(this).css("background-color","black");
      if ($(this).is(':checked')) {
       
        checkCount++;
        if(checkCount==12){
         
          $('.form-check-input').each(function () {
          var sThisVal = (this.checked ? '' :  $(this));
          if(sThisVal!=''){
            sThisVal.attr("disabled",true);
            test = sThisVal;
          }
          });
         
        }
      } else {
        checkCount--;
        $('.form-check-input').each(function () {
          var sThisVal = (this.checked ? '' :  $(this));
          if(sThisVal!=''){
            sThisVal.attr("disabled",false);
            test = sThisVal;
          }
        });
      }
      if(checkCount==12){
        alert("限制12個地區");
      }

    });
  }
  

 
  function drawRoulette(data) {
    var ans="";
    var RouletteItem = "";
    if (data.length < 12) {
      let len = 0;
      for (i = 0; i < 12; i++) {

        RouletteItem += '<span><i>' + data[len] + '</i></span>';
        ans+=data[len]+","+(15+i*30) +";"
        len++;
        if (len >= data.length) {
          len = 0;
        }
      }
    } else {
      for (i = 0; i < data.length; i++) {
        RouletteItem += '<span><i>' + data[i] + '</i></span>';
        ans+=data[i]+","+(15+i*30) +";"
      }
    }

    $(".xuanxiang").html(
      RouletteItem
    );
    //游戏项
    (function ($) {
      var r = 0;
      $('.xuanxiang>span').each(function () {
        $(this).css({
          transform: 'rotate(' + r + 'deg)'
        })
        r = r + 30;
      })
    })(jQuery);

    //游戏
    var btnGame = $('.nei');
      if (btnGame.length < 1) return;
      var a = $('.xuanxiang');
      if (a.length < 1) return;
      var rotate = 0;
      btnGame.unbind('click');
      btnGame.on('click', function () {
        $(".xuanxiang").css("transition-duration","5s")
        var num = Math.floor(Math.random() * 1800 + 360);
       
        rotate = rotate + num;
        var yu = rotate % 60;
        //if(yu>10 && yu<30) rotate-=20;
        //if(yu>30 && yu<50) rotate+=20;
        
        a.css({
          transform: 'rotate(' + rotate + 'deg)'
        });
        count = 5;
        $('.nei').css("pointer-events","none");
        var rot=360-$(".xuanxiang")[0].style.transform.split("(")[1].split('d')[0]%360;
        LocationAns = ans.split(';').filter(x=>x.split(',')[1]>=rot)[0].split(',')[0];
       
        countDown(6);
      });
  }
  // 設定秒數
 var LocationAns="";
  function countDown(count){
    // 將秒數寫在指定元素中
    
    // 每次執行就減1
    count -= 1;
    var timmer;
    clearTimeout()
    // 當 count = 0 時跳轉頁面
    if (count == 0){
      console.log(LocationAns);
      $("#locationTitle").text(LocationAns);
      console.log(locationData.filter(x=>x.place==LocationAns)[0].api)
      ajaxTest(locationData.filter(x=>x.place==LocationAns)[0].api);
      //$("#LocationView").modal("show");
      $('.nei').css("pointer-events","auto");
      clearTimeout(timmer)
    }else{
      timmer = setTimeout("countDown("+count+")",1000);
    }
    // 設定每秒執行1次
    
  }
  // 執行 countDown
  
  //外框小点
  (function ($) {
    var wai = $('.wai');
    if (wai.length < 1) return;
    var html = '';
    for (var i = 0; i < 24; i++) {
      html += '<span></span>';
    }
    //wai.append(html);

    var r = 0;
    wai.children('span').each(function () {
      $(this).css({
        transform: 'rotate(' + r + 'deg)'
      })
      r = r + 15;
    });
  })(jQuery);