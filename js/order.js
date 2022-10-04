
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수
            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }
            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
            }
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}

$(document).ready(function(){
    $("#abc").submit(function(){
        var name = $("input[name='name']").val();
        var phonenumber = $("input[name='phonenumber']").val();
        var email = $("input[name='email']").val();
        var name2 = $("input[name='name2']").val();
        var phonenumber2 = $("input[name='phonenumber2']").val();
        var postcode = $("input[name='postcode']").val();
        if(!name){
            alert("이름을 입력해주세요");
            $("input[name='name']").focus();
            return false;
        }
        if(!phonenumber){
            alert("휴대폰 번호를 입력해주세요");
            $("input[name='phonenumber']").focus();	
            return false;
        }
        if(!email){
            alert("이메일 주소를 입력해주세요");
            $("input[name='email']").focus();
            return false;
            }
        if(!name2){
            alert("이름을 입력해주세요");
            $("input[name='name2']").focus();
            return false;
        }
        if(!phonenumber2){
            alert("휴대폰 번호를 입력해주세요");
            $("input[name='phonenumber2']").focus();	
            return false;
            }	
        if(!postcode){
            alert("주소를 입력해주세요");
            $("input[name='postcode']").focus();
            return false;
            }	
        var address = $("input[name='address']").val();
        if(!address){
            alert("주소를 입력해주세요");
            $("input[name='address']").focus();
            return false;
            }	
        var address2 = $("input[name='address2']").val();
        if(!address2){
            alert("주소를 입력해주세요");
            $("input[name='address2']").focus();
            return false;
            }	
    });
});







