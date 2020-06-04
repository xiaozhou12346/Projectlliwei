/*
* url:传递的接口名称
* par:传递请求参数
* method:提交请求的方式 get/post
* callback:回调函数，解决异步获取数据的问题
* */
function Request(url,par,method,callback) {
    var trueurl='https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c'+'/'+url;
    var xhr=new XMLHttpRequest();
    //发送请求
    xhr.open(method,trueurl);
    if(method=="get"){
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        xhr.send()
    }else{
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        xhr.send(par);
    }
    xhr.onreadystatechange=function () {
             //4代表数据请求完成
             //200代表数据成功返回
             if(xhr.readyState==4&& xhr.status== 200){
                 //解析数据，responseText里面包含了服务端返回的数据
                 var responseData = JSON.parse(xhr.responseText)
                 var data=responseData.data;
                 callback(data)
             }
    }
}