/**
* 界面层的辅助工具类
*/
const utils = {

	scalingImage(imgWidth, imgHeight, containerWidth, containerHeight) {

	    var containerRatio = containerWidth / containerHeight;
	    var imgRatio = imgWidth / imgHeight;
	    if (imgWidth<containerWidth && imgHeight<containerHeight){
	    	return { width: imgWidth, height: imgHeight };
	    }
	    
	    if (imgRatio > containerRatio) {
	        imgWidth = containerWidth;
	        imgHeight = containerWidth / imgRatio;
	    } else if (imgRatio < containerRatio) {
	        imgHeight = containerHeight;
	        imgWidth = containerHeight * imgRatio;
	    } else {
	        imgWidth = containerWidth;
	        imgHeight = containerHeight;
	    }

	    return { width: imgWidth, height: imgHeight };
	},
	
	fmtDate(date, fmtExp) {

		if (! date){
			return "";
		}

		var len = date.toString().length;

		if (len <= 8){
			date = date * 1000;
		}
		
		if (len>13){
			date = date / 1000;
		}
		
		
		if (fmtExp == ''){
			if (new Date(date).toDateString() === new Date().toDateString()) {
				fmtExp = 'hh:mm';
			} else{
				fmtExp = 'MM-dd';
			}
		}

        var date = new Date(date)
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmtExp))
            fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmtExp))
                fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmtExp;
	},
	
	fmtDateExp(date, fmtExp) {
		return this.fmtDate(date, fmtExp);
	},
	
	fmtMsgText(msg){
		var text = msg.text ;
		text = text.replace('<font name="宋体" size="15" clr="0" flags="1" />','');
		text = text.replace('<btf>','');
		text = text.replace('</btf>','');
		text = text.replace('<text>','');
		text = text.replace('</text>','');
		text = text.replace('\r\n','<br>');
		
		text = this.fmtLink(text);
		
		text = this.fmtMsgEmot(text);

		//解析HTML的链接
		if (typeof(msg.content) == "string"){
			if (msg.content == ""){
				msg.content = "{}";
			}
			msg.content = JSON.parse(msg.content);
		}
		if ((msg.content.at != undefined) && (msg.content.at != "")){
			if (typeof(msg.content.at) == "string"){
				msg.content.at = JSON.parse(msg.content.at);
			}
			var atFromindex = [];
			for(var i=0;i<msg.content.at.length;i++){
				var user = msg.content.at[i] ;
				var uid = user.userid;
				var uname = user.username;
				if (!atFromindex[user.id]) atFromindex[user.id] = 0;
				if (text.indexOf("@" + uname, atFromindex[user.id]) > -1) {
					var startStr = text.substr(0, atFromindex[user.id]);
					var endStr = text.substr(atFromindex[user.id]);
					text = startStr + endStr.replace("@" + uname, "<a href='javascript:void(0)'>@" + uname + "</a>"); 
					atFromindex[user.id] = atFromindex[user.id] + uname.length + 34;
				}
			}
		}

		return text ;
	},
	
	fmtLink(txt){
		var reg = /(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig;
		var result = txt.replace(reg,function(item){
			return "<a href='"+item+"' target='_blank'>"+item+"</a>";
		});
		return result;
	},
	
	fmtMsgEmot(msg){
		if (!msg){
			return "";
		}
		var emots = IM.utils.getEmots();
		for(var i=0;i<emots.length;i++){
			var reg= new RegExp(emots[i].code,"g"); 
			msg = msg.replace(reg,"<img src='./static/face/" + i + ".png' class='emot' />"); 
		}
		return msg ;
	},
	
	fmtMsgEmotText(msg){
		
		if (msg == undefined){
			return "";
		}
		var emots = IM.utils.getEmots();
		for(var i=0;i<emots.length;i++){
			var reg= new RegExp(emots[i].code,"g"); 
			msg = msg.replace(reg,emots[i].text); 
		}
		return msg ;
	},

	fmtFileSize(fileSize){
		fileSize = parseInt(fileSize);
	    if (fileSize < 1024) {  
	        return fileSize + 'B';  
	    } else if (fileSize < (1024*1024)) {  
	        var temp = fileSize / 1024;  
	        temp = temp.toFixed(2);  
	        return temp + 'KB';  
	    } else if (fileSize < (1024*1024*1024)) {  
	        var temp = fileSize / (1024*1024);  
	        temp = temp.toFixed(2);  
	        return temp + 'MB';  
	    } else {  
	        var temp = fileSize / (1024*1024*1024);  
	        temp = temp.toFixed(2);  
	        return temp + 'GB';  
	    }  
	},

	fmtAvatar(url,type){
		if ((url == "") || (url == null)){
			return "/static/img/" + (type == undefined?'user':type)+ ".png" ;
		}else{
			return IM.utils.getFileFullPath(url);
		}
	},
	
	fmtNickname(nickname,name){
		if (nickname == ""){
			return name;
		}else{
			return nickname + "(" + name + ")";
		}
	},

	fmtSex(sex){
		if (sex == 1){
			return "男";
		}else if (sex == 2){
			return "女";
		}else{
			return "";
		}
	},

}
 

export default utils