$(document).ready(function(e) {
	var myData='';
	var arr='';
	$.ajax({
		url:"http://www.somenote.cn:2500/selection",
		type:"get",
		success:function(e){
		myData=e;
			//debugger
		}
	})
	$('.ce3').find('.no').click(function(){
		arr=$(this).attr('id')
		$('.ce3').css('display','none');
		$('.ce2').css('display','block');
		$('.ce1').css('display','none');
	})
	$('.ce2').find('.n').click(function(){
		var _id=$(this).attr('id');
		_why(_id,arr);
		
	})
	function _why(key,no){
		myData[0][key]=++myData[0][key];
		myData[0][no]=++myData[0][no];
		$.ajax({
				type: "put",
				url:"http://www.somenote.cn:2500/selection/8bea87ecfefd1b5a",
				data: myData[0],
				success:function(e){
					//debugger;
					//console.log(e)
					$('.ce2').css('display','none');
					$('.ce1').css('display','block');
					$('.ce3').css('display','none');
				}
		})
	}
})